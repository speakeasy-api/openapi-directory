import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FormsFormsWatchesRenewSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FormsFormsWatchesRenewSecurity extends SpeakeasyBase {
    option1?: FormsFormsWatchesRenewSecurityOption1;
    option2?: FormsFormsWatchesRenewSecurityOption2;
    option3?: FormsFormsWatchesRenewSecurityOption3;
    option4?: FormsFormsWatchesRenewSecurityOption4;
    option5?: FormsFormsWatchesRenewSecurityOption5;
    option6?: FormsFormsWatchesRenewSecurityOption6;
}
export declare class FormsFormsWatchesRenewRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    requestBody?: Record<string, any>;
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
     * Required. The ID of the Form.
     */
    formId: string;
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
    /**
     * Required. The ID of the Watch to renew.
     */
    watchId: string;
}
export declare class FormsFormsWatchesRenewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    watch?: shared.Watch;
}
