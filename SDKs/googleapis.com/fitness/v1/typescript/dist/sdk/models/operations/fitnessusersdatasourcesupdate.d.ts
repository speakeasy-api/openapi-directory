import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesUpdateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesUpdateSecurityOption1;
    option10?: FitnessUsersDataSourcesUpdateSecurityOption10;
    option11?: FitnessUsersDataSourcesUpdateSecurityOption11;
    option2?: FitnessUsersDataSourcesUpdateSecurityOption2;
    option3?: FitnessUsersDataSourcesUpdateSecurityOption3;
    option4?: FitnessUsersDataSourcesUpdateSecurityOption4;
    option5?: FitnessUsersDataSourcesUpdateSecurityOption5;
    option6?: FitnessUsersDataSourcesUpdateSecurityOption6;
    option7?: FitnessUsersDataSourcesUpdateSecurityOption7;
    option8?: FitnessUsersDataSourcesUpdateSecurityOption8;
    option9?: FitnessUsersDataSourcesUpdateSecurityOption9;
}
export declare class FitnessUsersDataSourcesUpdateRequest extends SpeakeasyBase {
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
     * The data stream ID of the data source to update.
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
     * Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataSource?: shared.DataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
