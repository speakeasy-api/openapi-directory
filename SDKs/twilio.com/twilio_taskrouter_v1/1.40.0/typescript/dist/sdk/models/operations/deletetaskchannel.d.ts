import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteTaskChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTaskChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the Task Channel resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task Channel to delete.
     */
    workspaceSid: string;
}
export declare class DeleteTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
