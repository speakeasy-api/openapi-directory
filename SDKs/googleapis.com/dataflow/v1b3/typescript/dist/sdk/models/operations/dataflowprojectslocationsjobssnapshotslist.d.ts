import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;
    option2?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;
    option3?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;
    option4?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * If specified, list snapshots created from this job.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The location to list snapshots in.
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
     * The project ID to list snapshots for.
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
export declare class DataflowProjectsLocationsJobsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
