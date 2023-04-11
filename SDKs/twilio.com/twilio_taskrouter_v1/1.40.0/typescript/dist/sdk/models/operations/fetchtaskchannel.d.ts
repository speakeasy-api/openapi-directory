import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the Task Channel resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task Channel to fetch.
     */
    workspaceSid: string;
}
export declare class FetchTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
