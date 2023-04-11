import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteActivitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteActivityRequest extends SpeakeasyBase {
    /**
     * The SID of the Activity resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Activity resources to delete.
     */
    workspaceSid: string;
}
export declare class DeleteActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
