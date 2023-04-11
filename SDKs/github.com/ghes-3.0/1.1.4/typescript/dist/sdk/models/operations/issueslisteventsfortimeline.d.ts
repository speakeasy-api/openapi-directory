import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesListEventsForTimelineRequest extends SpeakeasyBase {
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
export declare class IssuesListEventsForTimelineResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    timelineIssueEvents?: any[];
}
