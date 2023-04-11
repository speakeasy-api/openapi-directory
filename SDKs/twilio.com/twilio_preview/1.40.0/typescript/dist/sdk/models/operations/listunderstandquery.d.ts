import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * An ISO language-country string of the sample.
     */
    language?: string;
    /**
     * The Model Build Sid or unique name of the Model Build to be queried.
     */
    modelBuild?: string;
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
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    status?: string;
}
export declare class ListUnderstandQueryListUnderstandQueryResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandQueryListUnderstandQueryResponse extends SpeakeasyBase {
    meta?: ListUnderstandQueryListUnderstandQueryResponseMeta;
    queries?: shared.PreviewUnderstandAssistantQuery[];
}
export declare class ListUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandQueryResponse?: ListUnderstandQueryListUnderstandQueryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
