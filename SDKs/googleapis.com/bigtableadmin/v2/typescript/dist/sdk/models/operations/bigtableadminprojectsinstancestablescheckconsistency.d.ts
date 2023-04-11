import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    checkConsistencyRequest?: shared.CheckConsistencyRequest;
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
     * Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
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
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    checkConsistencyResponse?: shared.CheckConsistencyResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
