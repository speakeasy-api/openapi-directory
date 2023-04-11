import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrivePermissionsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DrivePermissionsInsertSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsInsertSecurityOption1;
    option2?: DrivePermissionsInsertSecurityOption2;
}
export declare class DrivePermissionsInsertRequest extends SpeakeasyBase {
    permissionInput?: shared.PermissionInput;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * A plain text custom message to include in notification emails.
     */
    emailMessage?: string;
    /**
     * Deprecated. See moveToNewOwnersRoot for details.
     */
    enforceSingleParent?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID for the file or shared drive.
     */
    fileId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed.
     */
    moveToNewOwnersRoot?: boolean;
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
     * Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
     */
    sendNotificationEmails?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DrivePermissionsInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    permission?: shared.Permission;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
