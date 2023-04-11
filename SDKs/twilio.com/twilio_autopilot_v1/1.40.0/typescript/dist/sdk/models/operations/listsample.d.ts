import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSampleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to read.
     */
    assistantSid: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
     */
    language?: string;
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
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resources to read.
     */
    taskSid: string;
}
export declare class ListSampleListSampleResponseMeta extends SpeakeasyBase {
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
export declare class ListSampleListSampleResponse extends SpeakeasyBase {
    meta?: ListSampleListSampleResponseMeta;
    samples?: shared.AutopilotV1AssistantTaskSample[];
}
export declare class ListSampleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSampleResponse?: ListSampleListSampleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
