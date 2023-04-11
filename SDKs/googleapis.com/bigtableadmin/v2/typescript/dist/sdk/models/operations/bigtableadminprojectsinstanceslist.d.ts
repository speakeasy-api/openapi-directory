import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesListSecurityOption6;
    option7?: BigtableadminProjectsInstancesListSecurityOption7;
}
export declare class BigtableadminProjectsInstancesListRequest extends SpeakeasyBase {
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
     * DEPRECATED: This field is unused and ignored.
     */
    pageToken?: string;
    /**
     * Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`.
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
export declare class BigtableadminProjectsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
