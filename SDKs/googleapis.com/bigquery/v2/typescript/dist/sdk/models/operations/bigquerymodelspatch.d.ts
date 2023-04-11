import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryModelsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryModelsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryModelsPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryModelsPatchSecurityOption1;
    option2?: BigqueryModelsPatchSecurityOption2;
}
export declare class BigqueryModelsPatchRequest extends SpeakeasyBase {
    modelInput?: shared.ModelInput;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Dataset ID of the model to patch.
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
     * Required. Model ID of the model to patch.
     */
    modelId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. Project ID of the model to patch.
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
export declare class BigqueryModelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    model?: shared.Model;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
