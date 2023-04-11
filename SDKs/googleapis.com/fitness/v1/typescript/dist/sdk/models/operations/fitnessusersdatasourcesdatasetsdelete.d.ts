import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption1;
    option10?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption10;
    option11?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption11;
    option2?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption2;
    option3?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption3;
    option4?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption4;
    option5?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption5;
    option6?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption6;
    option7?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption7;
    option8?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption8;
    option9?: FitnessUsersDataSourcesDatasetsDeleteSecurityOption9;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteRequest extends SpeakeasyBase {
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
     * Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesDatasetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
