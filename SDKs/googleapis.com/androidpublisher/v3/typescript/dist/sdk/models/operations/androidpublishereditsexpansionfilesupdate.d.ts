import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidpublisherEditsExpansionfilesUpdateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The file type of the file configuration which is being read or modified.
 */
export declare enum AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum {
    ExpansionFileTypeUnspecified = "expansionFileTypeUnspecified",
    Main = "main",
    Patch = "patch"
}
export declare class AndroidpublisherEditsExpansionfilesUpdateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    expansionFile?: shared.ExpansionFile;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The version code of the APK whose expansion file configuration is being read or modified.
     */
    apkVersionCode: number;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Identifier of the edit.
     */
    editId: string;
    /**
     * The file type of the file configuration which is being read or modified.
     */
    expansionFileType: AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum;
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
     * Package name of the app.
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
export declare class AndroidpublisherEditsExpansionfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    expansionFile?: shared.ExpansionFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
