import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaserulesProjectsReleasesGetExecutableSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsReleasesGetExecutableSecurityOption1;
    option2?: FirebaserulesProjectsReleasesGetExecutableSecurityOption2;
    option3?: FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
}
/**
 * The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.
 */
export declare enum FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}
export declare class FirebaserulesProjectsReleasesGetExecutableRequest extends SpeakeasyBase {
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
     * The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.
     */
    executableVersion?: FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`
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
}
export declare class FirebaserulesProjectsReleasesGetExecutableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getReleaseExecutableResponse?: shared.GetReleaseExecutableResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
