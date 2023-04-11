import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
     */
    assistantSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListTaskListTaskResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListTaskListTaskResponse extends SpeakeasyBase {
    meta?: ListTaskListTaskResponseMeta;
    tasks?: shared.AutopilotV1AssistantTask[];
}
export declare class ListTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskResponse?: ListTaskListTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
