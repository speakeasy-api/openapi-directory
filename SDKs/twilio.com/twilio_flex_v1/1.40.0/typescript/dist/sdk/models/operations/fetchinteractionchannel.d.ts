import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInteractionChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInteractionChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInteractionChannelRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid: string;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
     */
    sid: string;
}
export declare class FetchInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
