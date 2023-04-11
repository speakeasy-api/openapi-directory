import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandTaskRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
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
export declare class ListUnderstandTaskListUnderstandTaskResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandTaskListUnderstandTaskResponse extends SpeakeasyBase {
    meta?: ListUnderstandTaskListUnderstandTaskResponseMeta;
    tasks?: shared.PreviewUnderstandAssistantTask[];
}
export declare class ListUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandTaskResponse?: ListUnderstandTaskListUnderstandTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
