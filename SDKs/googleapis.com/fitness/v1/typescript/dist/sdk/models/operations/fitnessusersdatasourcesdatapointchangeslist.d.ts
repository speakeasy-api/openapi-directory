import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDataPointChangesListSecurityOption1;
    option10?: FitnessUsersDataSourcesDataPointChangesListSecurityOption10;
    option11?: FitnessUsersDataSourcesDataPointChangesListSecurityOption11;
    option12?: FitnessUsersDataSourcesDataPointChangesListSecurityOption12;
    option13?: FitnessUsersDataSourcesDataPointChangesListSecurityOption13;
    option14?: FitnessUsersDataSourcesDataPointChangesListSecurityOption14;
    option15?: FitnessUsersDataSourcesDataPointChangesListSecurityOption15;
    option16?: FitnessUsersDataSourcesDataPointChangesListSecurityOption16;
    option17?: FitnessUsersDataSourcesDataPointChangesListSecurityOption17;
    option18?: FitnessUsersDataSourcesDataPointChangesListSecurityOption18;
    option19?: FitnessUsersDataSourcesDataPointChangesListSecurityOption19;
    option2?: FitnessUsersDataSourcesDataPointChangesListSecurityOption2;
    option20?: FitnessUsersDataSourcesDataPointChangesListSecurityOption20;
    option21?: FitnessUsersDataSourcesDataPointChangesListSecurityOption21;
    option22?: FitnessUsersDataSourcesDataPointChangesListSecurityOption22;
    option3?: FitnessUsersDataSourcesDataPointChangesListSecurityOption3;
    option4?: FitnessUsersDataSourcesDataPointChangesListSecurityOption4;
    option5?: FitnessUsersDataSourcesDataPointChangesListSecurityOption5;
    option6?: FitnessUsersDataSourcesDataPointChangesListSecurityOption6;
    option7?: FitnessUsersDataSourcesDataPointChangesListSecurityOption7;
    option8?: FitnessUsersDataSourcesDataPointChangesListSecurityOption8;
    option9?: FitnessUsersDataSourcesDataPointChangesListSecurityOption9;
}
export declare class FitnessUsersDataSourcesDataPointChangesListRequest extends SpeakeasyBase {
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
     * The data stream ID of the data source that created the dataset.
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
     * If specified, no more than this many data point changes will be included in the response.
     */
    limit?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     */
    pageToken?: string;
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
     * List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesDataPointChangesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDataPointChangesResponse?: shared.ListDataPointChangesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
