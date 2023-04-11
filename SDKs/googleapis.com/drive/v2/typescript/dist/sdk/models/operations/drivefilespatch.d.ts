import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveFilesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveFilesPatchSecurity extends SpeakeasyBase {
    option1?: DriveFilesPatchSecurityOption1;
    option2?: DriveFilesPatchSecurityOption2;
    option3?: DriveFilesPatchSecurityOption3;
    option4?: DriveFilesPatchSecurityOption4;
    option5?: DriveFilesPatchSecurityOption5;
    option6?: DriveFilesPatchSecurityOption6;
}
/**
 * Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
 */
export declare enum DriveFilesPatchModifiedDateBehaviorEnum {
    FromBody = "fromBody",
    FromBodyIfNeeded = "fromBodyIfNeeded",
    FromBodyOrNow = "fromBodyOrNow",
    NoChange = "noChange",
    Now = "now",
    NowIfNeeded = "nowIfNeeded"
}
export declare class DriveFilesPatchRequest extends SpeakeasyBase {
    fileInput?: shared.FileInput;
    /**
     * Comma-separated list of parent IDs to add.
     */
    addParents?: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * This parameter is deprecated and has no function.
     */
    convert?: boolean;
    /**
     * Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead.
     */
    enforceSingleParent?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the file to update.
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
     * Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
     */
    modifiedDateBehavior?: DriveFilesPatchModifiedDateBehaviorEnum;
    /**
     * Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center. Note that this field is ignored if there is no payload in the request.
     */
    newRevision?: boolean;
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
     * Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
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
     * Comma-separated list of parent IDs to remove.
     */
    removeParents?: string;
    /**
     * Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
     */
    setModifiedDate?: boolean;
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
     * Whether to update the view date after successfully updating the file.
     */
    updateViewedDate?: boolean;
    /**
     * Whether to use the content as indexable text.
     */
    useContentAsIndexableText?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveFilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
