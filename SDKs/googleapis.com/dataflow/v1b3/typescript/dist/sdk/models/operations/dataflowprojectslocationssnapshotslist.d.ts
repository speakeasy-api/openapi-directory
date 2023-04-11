import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSnapshotsListSecurityOption1;
    option2?: DataflowProjectsLocationsSnapshotsListSecurityOption2;
    option3?: DataflowProjectsLocationsSnapshotsListSecurityOption3;
    option4?: DataflowProjectsLocationsSnapshotsListSecurityOption4;
}
export declare class DataflowProjectsLocationsSnapshotsListRequest extends SpeakeasyBase {
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
    jobId?: string;
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
export declare class DataflowProjectsLocationsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
