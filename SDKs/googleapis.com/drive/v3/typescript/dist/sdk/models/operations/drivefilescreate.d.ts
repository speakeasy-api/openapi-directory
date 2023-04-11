import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesCreateSecurity extends SpeakeasyBase {
    option1?: DriveFilesCreateSecurityOption1;
    option2?: DriveFilesCreateSecurityOption2;
    option3?: DriveFilesCreateSecurityOption3;
}
export declare class DriveFilesCreateRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Deprecated. Creating files in multiple folders is no longer supported.
     */
    enforceSingleParent?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     */
    ignoreDefaultVisibility?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the labelInfo part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     */
    keepRevisionForever?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
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
     * Whether to use the uploaded content as indexable text.
     */
    useContentAsIndexableText?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveFilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
