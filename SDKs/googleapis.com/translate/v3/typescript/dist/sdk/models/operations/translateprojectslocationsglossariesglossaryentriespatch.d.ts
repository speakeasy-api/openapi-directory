import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1;
    option2?: TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    glossaryEntry?: shared.GlossaryEntry;
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
     * Required. The resource name of the entry. Format: "projects/* /locations/* /glossaries/* /glossaryEntries/*"
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
     * The list of fields to be updated. Currently only `display_name` and 'input_config'
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    glossaryEntry?: shared.GlossaryEntry;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
