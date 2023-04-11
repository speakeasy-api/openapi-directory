import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDatasetsPatchSecurityOption1;
    option10?: FitnessUsersDataSourcesDatasetsPatchSecurityOption10;
    option11?: FitnessUsersDataSourcesDatasetsPatchSecurityOption11;
    option2?: FitnessUsersDataSourcesDatasetsPatchSecurityOption2;
    option3?: FitnessUsersDataSourcesDatasetsPatchSecurityOption3;
    option4?: FitnessUsersDataSourcesDatasetsPatchSecurityOption4;
    option5?: FitnessUsersDataSourcesDatasetsPatchSecurityOption5;
    option6?: FitnessUsersDataSourcesDatasetsPatchSecurityOption6;
    option7?: FitnessUsersDataSourcesDatasetsPatchSecurityOption7;
    option8?: FitnessUsersDataSourcesDatasetsPatchSecurityOption8;
    option9?: FitnessUsersDataSourcesDatasetsPatchSecurityOption9;
}
export declare class FitnessUsersDataSourcesDatasetsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    dataset?: shared.Dataset;
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
     * This field is not used, and can be safely omitted.
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
     * Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
