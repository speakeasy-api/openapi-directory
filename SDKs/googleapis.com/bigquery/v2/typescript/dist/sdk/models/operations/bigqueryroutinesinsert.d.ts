import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryRoutinesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesInsertSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesInsertSecurityOption1;
    option2?: BigqueryRoutinesInsertSecurityOption2;
}
export declare class BigqueryRoutinesInsertRequest extends SpeakeasyBase {
    routineInput?: shared.RoutineInput;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Dataset ID of the new routine
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
     * Required. Project ID of the new routine
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
export declare class BigqueryRoutinesInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    routine?: shared.Routine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
