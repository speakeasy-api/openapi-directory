import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteChannelServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to delete the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Channel resource to delete.
     */
    sid: string;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
