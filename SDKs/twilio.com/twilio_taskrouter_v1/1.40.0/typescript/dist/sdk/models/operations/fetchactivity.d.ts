import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchActivitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchActivityRequest extends SpeakeasyBase {
    /**
     * The SID of the Activity resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Activity resources to fetch.
     */
    workspaceSid: string;
}
export declare class FetchActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
