import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryRoutinesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesUpdateSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesUpdateSecurityOption1;
    option2?: BigqueryRoutinesUpdateSecurityOption2;
}
export declare class BigqueryRoutinesUpdateRequest extends SpeakeasyBase {
    routineInput?: shared.RoutineInput;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Dataset ID of the routine to update
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
     * Required. Project ID of the routine to update
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. Routine ID of the routine to update
     */
    routineId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryRoutinesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    routine?: shared.Routine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
