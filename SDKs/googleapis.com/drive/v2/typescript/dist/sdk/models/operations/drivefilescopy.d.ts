import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesCopySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCopySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCopySecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCopySecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCopySecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCopySecurity extends SpeakeasyBase {
    option1?: DriveFilesCopySecurityOption1;
    option2?: DriveFilesCopySecurityOption2;
    option3?: DriveFilesCopySecurityOption3;
    option4?: DriveFilesCopySecurityOption4;
    option5?: DriveFilesCopySecurityOption5;
}
/**
 * The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
 */
export declare enum DriveFilesCopyVisibilityEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class DriveFilesCopyRequest extends SpeakeasyBase {
    fileInput?: shared.FileInput;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Whether to convert this file to the corresponding Docs Editors format.
     */
    convert?: boolean;
    /**
     * Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.
     */
    enforceSingleParent?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the file to copy.
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
     * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     */
    ocr?: boolean;
    /**
     * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     */
    ocrLanguage?: string;
    /**
     * Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     */
    pinned?: boolean;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated use supportsAllDrives instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * The language of the timed text.
     */
    timedTextLanguage?: string;
    /**
     * The timed text track name.
     */
    timedTextTrackName?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     */
    visibility?: DriveFilesCopyVisibilityEnum;
}
export declare class DriveFilesCopyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
