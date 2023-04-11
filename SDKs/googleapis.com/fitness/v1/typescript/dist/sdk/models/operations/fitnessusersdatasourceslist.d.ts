import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesListSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesListSecurityOption1;
    option10?: FitnessUsersDataSourcesListSecurityOption10;
    option11?: FitnessUsersDataSourcesListSecurityOption11;
    option12?: FitnessUsersDataSourcesListSecurityOption12;
    option13?: FitnessUsersDataSourcesListSecurityOption13;
    option14?: FitnessUsersDataSourcesListSecurityOption14;
    option15?: FitnessUsersDataSourcesListSecurityOption15;
    option16?: FitnessUsersDataSourcesListSecurityOption16;
    option17?: FitnessUsersDataSourcesListSecurityOption17;
    option18?: FitnessUsersDataSourcesListSecurityOption18;
    option19?: FitnessUsersDataSourcesListSecurityOption19;
    option2?: FitnessUsersDataSourcesListSecurityOption2;
    option20?: FitnessUsersDataSourcesListSecurityOption20;
    option21?: FitnessUsersDataSourcesListSecurityOption21;
    option22?: FitnessUsersDataSourcesListSecurityOption22;
    option3?: FitnessUsersDataSourcesListSecurityOption3;
    option4?: FitnessUsersDataSourcesListSecurityOption4;
    option5?: FitnessUsersDataSourcesListSecurityOption5;
    option6?: FitnessUsersDataSourcesListSecurityOption6;
    option7?: FitnessUsersDataSourcesListSecurityOption7;
    option8?: FitnessUsersDataSourcesListSecurityOption8;
    option9?: FitnessUsersDataSourcesListSecurityOption9;
}
export declare class FitnessUsersDataSourcesListRequest extends SpeakeasyBase {
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
     * The names of data types to include in the list. If not specified, all data sources will be returned.
     */
    dataTypeName?: string[];
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
     * List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDataSourcesResponse?: shared.ListDataSourcesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
