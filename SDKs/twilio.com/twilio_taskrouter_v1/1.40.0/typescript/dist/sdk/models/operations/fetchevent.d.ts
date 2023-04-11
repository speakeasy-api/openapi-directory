import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEventServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEventRequest extends SpeakeasyBase {
    /**
     * The SID of the Event resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Event to fetch.
     */
    workspaceSid: string;
}
export declare class FetchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceEvent?: shared.TaskrouterV1WorkspaceEvent;
}
