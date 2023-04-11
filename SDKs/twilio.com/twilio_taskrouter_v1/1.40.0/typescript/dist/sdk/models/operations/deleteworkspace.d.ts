import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkspaceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    /**
     * The SID of the Workspace resource to delete.
     */
    sid: string;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
