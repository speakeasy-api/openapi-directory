import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidpublisherEditsDeobfuscationfilesUploadSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum {
    NativeCode = "nativeCode",
    Proguard = "proguard"
}
export declare class AndroidpublisherEditsDeobfuscationfilesUploadRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The version code of the APK whose deobfuscation file is being uploaded.
     */
    apkVersionCode: number;
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
     * Unique identifier of the Android app for which the deobfuscation files are being uploaded; for example, "com.spiffygame".
     */
    packageName: string;
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
export declare class AndroidpublisherEditsDeobfuscationfilesUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
