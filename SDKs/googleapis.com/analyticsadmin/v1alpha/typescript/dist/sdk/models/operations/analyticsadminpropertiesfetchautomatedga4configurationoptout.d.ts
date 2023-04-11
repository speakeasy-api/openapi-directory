import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1;
    option2?: AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption2;
}
export declare class AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest?: shared.GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest;
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
}
export declare class AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse?: shared.GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
