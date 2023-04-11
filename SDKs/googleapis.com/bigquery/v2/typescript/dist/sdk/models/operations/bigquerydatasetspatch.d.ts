import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryDatasetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryDatasetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryDatasetsPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryDatasetsPatchSecurityOption1;
    option2?: BigqueryDatasetsPatchSecurityOption2;
}
export declare class BigqueryDatasetsPatchRequest extends SpeakeasyBase {
    dataset?: shared.Dataset;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Dataset ID of the dataset being updated
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
     * Project ID of the dataset being updated
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryDatasetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataset?: shared.Dataset;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
