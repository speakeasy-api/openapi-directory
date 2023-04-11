import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesWatchSecurity extends SpeakeasyBase {
    option1?: DriveFilesWatchSecurityOption1;
    option2?: DriveFilesWatchSecurityOption2;
    option3?: DriveFilesWatchSecurityOption3;
    option4?: DriveFilesWatchSecurityOption4;
    option5?: DriveFilesWatchSecurityOption5;
    option6?: DriveFilesWatchSecurityOption6;
    option7?: DriveFilesWatchSecurityOption7;
}
/**
 * This parameter is deprecated and has no function.
 */
export declare enum DriveFilesWatchProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DriveFilesWatchRequest extends SpeakeasyBase {
    channel?: shared.Channel;
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files.
     */
    acknowledgeAbuse?: boolean;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID for the file in question.
     */
    fileId: string;
    /**
     * A comma-separated list of IDs of labels to include in the labelInfo part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
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
     * This parameter is deprecated and has no function.
     */
    projection?: DriveFilesWatchProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     */
    revisionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
     */
    updateViewedDate?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveFilesWatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
