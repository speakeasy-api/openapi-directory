import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesGetSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesGetSecurityOption1;
    option10?: FitnessUsersDataSourcesGetSecurityOption10;
    option11?: FitnessUsersDataSourcesGetSecurityOption11;
    option12?: FitnessUsersDataSourcesGetSecurityOption12;
    option13?: FitnessUsersDataSourcesGetSecurityOption13;
    option14?: FitnessUsersDataSourcesGetSecurityOption14;
    option15?: FitnessUsersDataSourcesGetSecurityOption15;
    option16?: FitnessUsersDataSourcesGetSecurityOption16;
    option17?: FitnessUsersDataSourcesGetSecurityOption17;
    option18?: FitnessUsersDataSourcesGetSecurityOption18;
    option19?: FitnessUsersDataSourcesGetSecurityOption19;
    option2?: FitnessUsersDataSourcesGetSecurityOption2;
    option20?: FitnessUsersDataSourcesGetSecurityOption20;
    option21?: FitnessUsersDataSourcesGetSecurityOption21;
    option22?: FitnessUsersDataSourcesGetSecurityOption22;
    option3?: FitnessUsersDataSourcesGetSecurityOption3;
    option4?: FitnessUsersDataSourcesGetSecurityOption4;
    option5?: FitnessUsersDataSourcesGetSecurityOption5;
    option6?: FitnessUsersDataSourcesGetSecurityOption6;
    option7?: FitnessUsersDataSourcesGetSecurityOption7;
    option8?: FitnessUsersDataSourcesGetSecurityOption8;
    option9?: FitnessUsersDataSourcesGetSecurityOption9;
}
export declare class FitnessUsersDataSourcesGetRequest extends SpeakeasyBase {
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
     * The data stream ID of the data source to retrieve.
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
export declare class FitnessUsersDataSourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataSource?: shared.DataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
