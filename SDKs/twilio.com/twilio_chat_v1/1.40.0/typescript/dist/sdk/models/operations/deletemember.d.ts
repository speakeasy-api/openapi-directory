import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMemberServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the message belongs to.  Can be the Channel's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Member resource to delete.
     */
    sid: string;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
