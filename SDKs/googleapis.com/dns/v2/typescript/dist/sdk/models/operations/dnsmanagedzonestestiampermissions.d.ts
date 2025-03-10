import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DnsManagedZonesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsManagedZonesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesTestIamPermissionsSecurityOption1;
    option2?: DnsManagedZonesTestIamPermissionsSecurityOption2;
    option3?: DnsManagedZonesTestIamPermissionsSecurityOption3;
    option4?: DnsManagedZonesTestIamPermissionsSecurityOption4;
}
export declare class DnsManagedZonesTestIamPermissionsRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleIamV1TestIamPermissionsRequest?: shared.GoogleIamV1TestIamPermissionsRequest;
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DnsManagedZonesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
