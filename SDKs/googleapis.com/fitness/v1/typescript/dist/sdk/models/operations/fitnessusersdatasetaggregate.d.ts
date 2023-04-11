import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersDatasetAggregateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersDatasetAggregateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDatasetAggregateSecurityOption1;
    option10?: FitnessUsersDatasetAggregateSecurityOption10;
    option11?: FitnessUsersDatasetAggregateSecurityOption11;
    option12?: FitnessUsersDatasetAggregateSecurityOption12;
    option13?: FitnessUsersDatasetAggregateSecurityOption13;
    option14?: FitnessUsersDatasetAggregateSecurityOption14;
    option15?: FitnessUsersDatasetAggregateSecurityOption15;
    option16?: FitnessUsersDatasetAggregateSecurityOption16;
    option17?: FitnessUsersDatasetAggregateSecurityOption17;
    option18?: FitnessUsersDatasetAggregateSecurityOption18;
    option19?: FitnessUsersDatasetAggregateSecurityOption19;
    option2?: FitnessUsersDatasetAggregateSecurityOption2;
    option20?: FitnessUsersDatasetAggregateSecurityOption20;
    option21?: FitnessUsersDatasetAggregateSecurityOption21;
    option22?: FitnessUsersDatasetAggregateSecurityOption22;
    option3?: FitnessUsersDatasetAggregateSecurityOption3;
    option4?: FitnessUsersDatasetAggregateSecurityOption4;
    option5?: FitnessUsersDatasetAggregateSecurityOption5;
    option6?: FitnessUsersDatasetAggregateSecurityOption6;
    option7?: FitnessUsersDatasetAggregateSecurityOption7;
    option8?: FitnessUsersDatasetAggregateSecurityOption8;
    option9?: FitnessUsersDatasetAggregateSecurityOption9;
}
export declare class FitnessUsersDatasetAggregateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    aggregateRequest?: shared.AggregateRequest;
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
     * Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersDatasetAggregateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    aggregateResponse?: shared.AggregateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
