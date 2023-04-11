import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInteractionChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInteractionChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInteractionChannelUpdateInteractionChannelRequest extends SpeakeasyBase {
    /**
     * Optional. The state of associated tasks. If not specified, all tasks will be set to `wrapping`.
     */
    routing?: any;
    status: shared.InteractionChannelEnumStatusEnum;
}
export declare class UpdateInteractionChannelRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    requestBody?: UpdateInteractionChannelUpdateInteractionChannelRequest;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
     */
    sid: string;
}
export declare class UpdateInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
