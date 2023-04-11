import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestingTestEnvironmentCatalogGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TestingTestEnvironmentCatalogGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TestingTestEnvironmentCatalogGetSecurity extends SpeakeasyBase {
    option1?: TestingTestEnvironmentCatalogGetSecurityOption1;
    option2?: TestingTestEnvironmentCatalogGetSecurityOption2;
}
/**
 * Required. The type of environment that should be listed.
 */
export declare enum TestingTestEnvironmentCatalogGetEnvironmentTypeEnum {
    EnvironmentTypeUnspecified = "ENVIRONMENT_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    NetworkConfiguration = "NETWORK_CONFIGURATION",
    ProvidedSoftware = "PROVIDED_SOFTWARE",
    DeviceIpBlocks = "DEVICE_IP_BLOCKS"
}
export declare class TestingTestEnvironmentCatalogGetRequest extends SpeakeasyBase {
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
     * Required. The type of environment that should be listed.
     */
    environmentType: TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
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
     * For authorization, the cloud project requesting the TestEnvironmentCatalog.
     */
    projectId?: string;
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
export declare class TestingTestEnvironmentCatalogGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    testEnvironmentCatalog?: shared.TestEnvironmentCatalog;
}
