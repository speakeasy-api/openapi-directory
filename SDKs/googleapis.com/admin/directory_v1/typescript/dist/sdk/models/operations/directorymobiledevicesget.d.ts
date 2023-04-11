import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryMobiledevicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryMobiledevicesGetSecurityOption1;
    option2?: DirectoryMobiledevicesGetSecurityOption2;
    option3?: DirectoryMobiledevicesGetSecurityOption3;
}
/**
 * Restrict information returned to a set of selected fields.
 */
export declare enum DirectoryMobiledevicesGetProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DirectoryMobiledevicesGetRequest extends SpeakeasyBase {
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
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId: string;
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: DirectoryMobiledevicesGetProjectionEnum;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The unique ID the API service uses to identify the mobile device.
     */
    resourceId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DirectoryMobiledevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    mobileDevice?: shared.MobileDevice;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
