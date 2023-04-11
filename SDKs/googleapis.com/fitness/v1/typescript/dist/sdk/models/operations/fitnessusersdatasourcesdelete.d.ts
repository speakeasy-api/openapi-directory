import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDeleteSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDeleteSecurityOption1;
    option10?: FitnessUsersDataSourcesDeleteSecurityOption10;
    option11?: FitnessUsersDataSourcesDeleteSecurityOption11;
    option2?: FitnessUsersDataSourcesDeleteSecurityOption2;
    option3?: FitnessUsersDataSourcesDeleteSecurityOption3;
    option4?: FitnessUsersDataSourcesDeleteSecurityOption4;
    option5?: FitnessUsersDataSourcesDeleteSecurityOption5;
    option6?: FitnessUsersDataSourcesDeleteSecurityOption6;
    option7?: FitnessUsersDataSourcesDeleteSecurityOption7;
    option8?: FitnessUsersDataSourcesDeleteSecurityOption8;
    option9?: FitnessUsersDataSourcesDeleteSecurityOption9;
}
export declare class FitnessUsersDataSourcesDeleteRequest extends SpeakeasyBase {
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
     * The data stream ID of the data source to delete.
     */
    dataSourceId: string;
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
     * Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataSource?: shared.DataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
