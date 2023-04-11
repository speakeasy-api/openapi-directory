import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidmanagementEnterprisesWebAppsDeleteSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum {
    WipeDataFlagUnspecified = "WIPE_DATA_FLAG_UNSPECIFIED",
    PreserveResetProtectionData = "PRESERVE_RESET_PROTECTION_DATA",
    WipeExternalStorage = "WIPE_EXTERNAL_STORAGE"
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteRequest extends SpeakeasyBase {
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
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
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
    /**
     * Optional flags that control the device wiping behavior.
     */
    wipeDataFlags?: AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum[];
    /**
     * Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     */
    wipeReasonMessage?: string;
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
