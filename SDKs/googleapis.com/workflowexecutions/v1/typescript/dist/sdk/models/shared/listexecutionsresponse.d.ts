import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Response for the ListExecutions method.
 */
export declare class ListExecutionsResponse extends SpeakeasyBase {
    /**
     * The executions which match the request.
     */
    executions?: Execution[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
