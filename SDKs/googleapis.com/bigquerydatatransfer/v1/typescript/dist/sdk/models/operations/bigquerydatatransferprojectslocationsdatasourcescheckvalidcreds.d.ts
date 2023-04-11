import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
    option2?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
    option3?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
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
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    checkValidCredsResponse?: shared.CheckValidCredsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
