import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidpublisherEditsDeobfuscationfilesUploadSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The type of the deobfuscation file.
 */
export declare enum AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified",
    Proguard = "proguard",
    NativeCode = "nativeCode"
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The version code of the APK whose Deobfuscation File is being uploaded.
     */
    apkVersionCode: number;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The type of the deobfuscation file.
     */
    deobfuscationFileType: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
    /**
     * Unique identifier for this edit.
     */
    editId: string;
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
     * Unique identifier for the Android app.
     */
    packageName: string;
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
export declare class AndroidpublisherEditsDeobfuscationfilesUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    deobfuscationFilesUploadResponse?: shared.DeobfuscationFilesUploadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
