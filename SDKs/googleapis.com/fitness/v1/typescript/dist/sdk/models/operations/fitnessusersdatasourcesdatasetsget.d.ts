import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDatasetsGetSecurityOption1;
    option10?: FitnessUsersDataSourcesDatasetsGetSecurityOption10;
    option11?: FitnessUsersDataSourcesDatasetsGetSecurityOption11;
    option12?: FitnessUsersDataSourcesDatasetsGetSecurityOption12;
    option13?: FitnessUsersDataSourcesDatasetsGetSecurityOption13;
    option14?: FitnessUsersDataSourcesDatasetsGetSecurityOption14;
    option15?: FitnessUsersDataSourcesDatasetsGetSecurityOption15;
    option16?: FitnessUsersDataSourcesDatasetsGetSecurityOption16;
    option17?: FitnessUsersDataSourcesDatasetsGetSecurityOption17;
    option18?: FitnessUsersDataSourcesDatasetsGetSecurityOption18;
    option19?: FitnessUsersDataSourcesDatasetsGetSecurityOption19;
    option2?: FitnessUsersDataSourcesDatasetsGetSecurityOption2;
    option20?: FitnessUsersDataSourcesDatasetsGetSecurityOption20;
    option21?: FitnessUsersDataSourcesDatasetsGetSecurityOption21;
    option22?: FitnessUsersDataSourcesDatasetsGetSecurityOption22;
    option3?: FitnessUsersDataSourcesDatasetsGetSecurityOption3;
    option4?: FitnessUsersDataSourcesDatasetsGetSecurityOption4;
    option5?: FitnessUsersDataSourcesDatasetsGetSecurityOption5;
    option6?: FitnessUsersDataSourcesDatasetsGetSecurityOption6;
    option7?: FitnessUsersDataSourcesDatasetsGetSecurityOption7;
    option8?: FitnessUsersDataSourcesDatasetsGetSecurityOption8;
    option9?: FitnessUsersDataSourcesDatasetsGetSecurityOption9;
}
export declare class FitnessUsersDataSourcesDatasetsGetRequest extends SpeakeasyBase {
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
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response. The limit is applied from the end of the time range. That is, if pageToken is absent, the limit most recent data points will be returned.
     */
    limit?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
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
     * Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesDatasetsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
