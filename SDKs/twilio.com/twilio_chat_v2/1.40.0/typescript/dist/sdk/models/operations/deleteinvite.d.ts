import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteInviteServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteInviteRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Invite resource to delete belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the Invite resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Invite resource to delete.
     */
    sid: string;
}
export declare class DeleteInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
