import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryOrgunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryOrgunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryOrgunitsListSecurity extends SpeakeasyBase {
    option1?: DirectoryOrgunitsListSecurityOption1;
    option2?: DirectoryOrgunitsListSecurityOption2;
}
/**
 * Whether to return all sub-organizations or just immediate children.
 */
export declare enum DirectoryOrgunitsListTypeEnum {
    All = "all",
    Children = "children"
}
export declare class DirectoryOrgunitsListRequest extends SpeakeasyBase {
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
     * The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.
     */
    orgUnitPath?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Whether to return all sub-organizations or just immediate children.
     */
    type?: DirectoryOrgunitsListTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DirectoryOrgunitsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    orgUnits?: shared.OrgUnits;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
