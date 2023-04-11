import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesListSecurity extends SpeakeasyBase {
    option1?: DriveFilesListSecurityOption1;
    option2?: DriveFilesListSecurityOption2;
    option3?: DriveFilesListSecurityOption3;
    option4?: DriveFilesListSecurityOption4;
    option5?: DriveFilesListSecurityOption5;
    option6?: DriveFilesListSecurityOption6;
    option7?: DriveFilesListSecurityOption7;
    option8?: DriveFilesListSecurityOption8;
}
/**
 * The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
 */
export declare enum DriveFilesListCorpusEnum {
    Default = "DEFAULT",
    Domain = "DOMAIN"
}
/**
 * This parameter is deprecated and has no function.
 */
export declare enum DriveFilesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DriveFilesListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'), 'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency.
     */
    corpora?: string;
    /**
     * The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
     */
    corpus?: DriveFilesListCorpusEnum;
    /**
     * ID of the shared drive to search.
     */
    driveId?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the labelInfo part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Deprecated use includeItemsFromAllDrives instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', 'title', and 'title_natural'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     */
    orderBy?: string;
    /**
     * Page token for files.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * This parameter is deprecated and has no function.
     */
    projection?: DriveFilesListProjectionEnum;
    /**
     * Query string for searching files.
     */
    q?: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * A comma-separated list of spaces to query. Supported values are 'drive' and 'appDataFolder'.
     */
    spaces?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated use driveId instead.
     */
    teamDriveId?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveFilesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    fileList?: shared.FileList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
