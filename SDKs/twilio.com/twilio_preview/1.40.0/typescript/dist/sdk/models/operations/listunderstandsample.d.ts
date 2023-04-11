import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * An ISO language-country string of the sample.
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
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
}
export declare class ListUnderstandSampleListUnderstandSampleResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandSampleListUnderstandSampleResponse extends SpeakeasyBase {
    meta?: ListUnderstandSampleListUnderstandSampleResponseMeta;
    samples?: shared.PreviewUnderstandAssistantTaskSample[];
}
export declare class ListUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandSampleResponse?: ListUnderstandSampleListUnderstandSampleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
