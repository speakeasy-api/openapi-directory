import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesCreateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesCreateSecurityOption1;
    option10?: FitnessUsersDataSourcesCreateSecurityOption10;
    option11?: FitnessUsersDataSourcesCreateSecurityOption11;
    option2?: FitnessUsersDataSourcesCreateSecurityOption2;
    option3?: FitnessUsersDataSourcesCreateSecurityOption3;
    option4?: FitnessUsersDataSourcesCreateSecurityOption4;
    option5?: FitnessUsersDataSourcesCreateSecurityOption5;
    option6?: FitnessUsersDataSourcesCreateSecurityOption6;
    option7?: FitnessUsersDataSourcesCreateSecurityOption7;
    option8?: FitnessUsersDataSourcesCreateSecurityOption8;
    option9?: FitnessUsersDataSourcesCreateSecurityOption9;
}
export declare class FitnessUsersDataSourcesCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    dataSource?: shared.DataSource;
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
    /**
     * Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataSource?: shared.DataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
