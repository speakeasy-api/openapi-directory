import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesAppProfilesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesAppProfilesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesAppProfilesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesAppProfilesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesAppProfilesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesAppProfilesListSecurityOption6;
}
export declare class BigtableadminProjectsInstancesAppProfilesListRequest extends SpeakeasyBase {
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
     * Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.
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
export declare class BigtableadminProjectsInstancesAppProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAppProfilesResponse?: shared.ListAppProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
