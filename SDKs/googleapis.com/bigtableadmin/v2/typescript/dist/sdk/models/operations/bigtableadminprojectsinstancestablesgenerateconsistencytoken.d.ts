import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    requestBody?: Record<string, any>;
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
     * Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
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
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    generateConsistencyTokenResponse?: shared.GenerateConsistencyTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
