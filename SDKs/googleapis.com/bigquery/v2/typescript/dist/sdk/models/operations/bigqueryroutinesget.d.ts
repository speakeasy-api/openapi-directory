import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryRoutinesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryRoutinesGetSecurity extends SpeakeasyBase {
    option1?: BigqueryRoutinesGetSecurityOption1;
    option2?: BigqueryRoutinesGetSecurityOption2;
    option3?: BigqueryRoutinesGetSecurityOption3;
}
export declare class BigqueryRoutinesGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Dataset ID of the requested routine
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
     * Required. Project ID of the requested routine
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     */
    readMask?: string;
    /**
     * Required. Routine ID of the requested routine
     */
    routineId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryRoutinesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    routine?: shared.Routine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
