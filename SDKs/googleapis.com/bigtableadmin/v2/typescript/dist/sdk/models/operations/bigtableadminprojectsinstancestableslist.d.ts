import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsInstancesTablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesListSecurityOption6;
}
/**
 * The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.
 */
export declare enum BigtableadminProjectsInstancesTablesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    NameOnly = "NAME_ONLY",
    SchemaView = "SCHEMA_VIEW",
    ReplicationView = "REPLICATION_VIEW",
    EncryptionView = "ENCRYPTION_VIEW",
    StatsView = "STATS_VIEW",
    Full = "FULL"
}
export declare class BigtableadminProjectsInstancesTablesListRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     */
    pageSize?: number;
    /**
     * The value of `next_page_token` returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.
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
    /**
     * The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.
     */
    view?: BigtableadminProjectsInstancesTablesListViewEnum;
}
export declare class BigtableadminProjectsInstancesTablesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTablesResponse?: shared.ListTablesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
