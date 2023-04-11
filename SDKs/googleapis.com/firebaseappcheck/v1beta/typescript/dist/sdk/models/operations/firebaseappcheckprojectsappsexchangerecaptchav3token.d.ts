import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest?: shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app: string;
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
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
