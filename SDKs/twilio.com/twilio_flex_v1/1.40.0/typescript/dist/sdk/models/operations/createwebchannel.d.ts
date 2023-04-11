import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateWebChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWebChannelCreateWebChannelRequest extends SpeakeasyBase {
    /**
     * The chat channel's friendly name.
     */
    chatFriendlyName: string;
    /**
     * The chat channel's unique name.
     */
    chatUniqueName?: string;
    /**
     * The chat participant's friendly name.
     */
    customerFriendlyName: string;
    /**
     * The SID of the Flex Flow.
     */
    flexFlowSid: string;
    /**
     * The chat identity.
     */
    identity: string;
    /**
     * The pre-engagement data.
     */
    preEngagementData?: string;
}
export declare class CreateWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
