import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrivePermissionsGetIdForEmailSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsGetIdForEmailSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsGetIdForEmailSecurityOption1;
    option2?: DrivePermissionsGetIdForEmailSecurityOption2;
    option3?: DrivePermissionsGetIdForEmailSecurityOption3;
    option4?: DrivePermissionsGetIdForEmailSecurityOption4;
    option5?: DrivePermissionsGetIdForEmailSecurityOption5;
    option6?: DrivePermissionsGetIdForEmailSecurityOption6;
    option7?: DrivePermissionsGetIdForEmailSecurityOption7;
    option8?: DrivePermissionsGetIdForEmailSecurityOption8;
}
export declare class DrivePermissionsGetIdForEmailRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The email address for which to return a permission ID
     */
    email: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DrivePermissionsGetIdForEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    permissionId?: shared.PermissionId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
