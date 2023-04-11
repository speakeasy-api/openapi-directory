import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSnapshotsGetSecurityOption1;
    option2?: DataflowProjectsLocationsSnapshotsGetSecurityOption2;
    option3?: DataflowProjectsLocationsSnapshotsGetSecurityOption3;
    option4?: DataflowProjectsLocationsSnapshotsGetSecurityOption4;
}
export declare class DataflowProjectsLocationsSnapshotsGetRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The location that contains this snapshot.
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
     * The ID of the Cloud Platform project that the snapshot belongs to.
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The ID of the snapshot.
     */
    snapshotId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    snapshot?: shared.Snapshot;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
