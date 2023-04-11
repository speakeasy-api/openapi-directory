import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GkebackupProjectsLocationsBackupPlansBackupsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class GkebackupProjectsLocationsBackupPlansBackupsListRequest extends SpeakeasyBase {
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
     * Field match expression used to filter the results.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Field by which to sort the results.
     */
    orderBy?: string;
    /**
     * The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may inclue a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * The value of next_page_token received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The BackupPlan that contains the Backups to list. Format: `projects/* /locations/* /backupPlans/*`
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
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
export declare class GkebackupProjectsLocationsBackupPlansBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
