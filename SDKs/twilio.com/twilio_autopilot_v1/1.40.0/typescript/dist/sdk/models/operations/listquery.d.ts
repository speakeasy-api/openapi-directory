import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListQueryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
     */
    assistantSid: string;
    /**
     * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
     */
    dialogueSid?: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
     */
    language?: string;
    /**
     * The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
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
     * The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
     */
    status?: string;
}
export declare class ListQueryListQueryResponseMeta extends SpeakeasyBase {
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
export declare class ListQueryListQueryResponse extends SpeakeasyBase {
    meta?: ListQueryListQueryResponseMeta;
    queries?: shared.AutopilotV1AssistantQuery[];
}
export declare class ListQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listQueryResponse?: ListQueryListQueryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
