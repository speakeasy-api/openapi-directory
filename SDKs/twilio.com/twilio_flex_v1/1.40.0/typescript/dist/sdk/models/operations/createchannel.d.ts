import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
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
    chatUserFriendlyName: string;
    /**
     * The SID of the Flex Flow.
     */
    flexFlowSid: string;
    /**
     * The `identity` value that uniquely identifies the new resource's chat User.
     */
    identity: string;
    /**
     * Whether to create the channel as long-lived.
     */
    longLived?: boolean;
    /**
     * The pre-engagement data.
     */
    preEngagementData?: string;
    /**
     * The Target Contact Identity, for example the phone number of an SMS.
     */
    target?: string;
    /**
     * The Task attributes to be added for the TaskRouter Task.
     */
    taskAttributes?: string;
    /**
     * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for integration types `studio` & `external`
     */
    taskSid?: string;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1Channel?: shared.FlexV1Channel;
}
