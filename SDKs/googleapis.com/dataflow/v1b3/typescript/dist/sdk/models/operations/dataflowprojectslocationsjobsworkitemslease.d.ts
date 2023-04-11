import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1;
    option2?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2;
    option3?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3;
    option4?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    leaseWorkItemRequest?: shared.LeaseWorkItemRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Identifies the workflow job this worker belongs to.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     */
    location: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Identifies the project this worker belongs to.
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    leaseWorkItemResponse?: shared.LeaseWorkItemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
