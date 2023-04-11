import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryJobsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryJobsListSecurity extends SpeakeasyBase {
    option1?: BigqueryJobsListSecurityOption1;
    option2?: BigqueryJobsListSecurityOption2;
    option3?: BigqueryJobsListSecurityOption3;
}
/**
 * Restrict information returned to a set of selected fields
 */
export declare enum BigqueryJobsListProjectionEnum {
    Full = "full",
    Minimal = "minimal"
}
export declare enum BigqueryJobsListStateFilterEnum {
    Done = "done",
    Pending = "pending",
    Running = "running"
}
export declare class BigqueryJobsListRequest extends SpeakeasyBase {
    /**
     * Whether to display jobs owned by all users in the project. Default false
     */
    allUsers?: boolean;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
     */
    maxCreationTime?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
     */
    minCreationTime?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
     */
    parentJobId?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Project ID of the jobs to list
     */
    projectId: string;
    /**
     * Restrict information returned to a set of selected fields
     */
    projection?: BigqueryJobsListProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Filter for job state
     */
    stateFilter?: BigqueryJobsListStateFilterEnum[];
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryJobsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    jobList?: shared.JobList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
