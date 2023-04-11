import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPoliciesRequestBody extends SpeakeasyBase {
    quoteId?: string;
}
/**
 * OK
 */
export declare class PostPolicies200ApplicationJSON extends SpeakeasyBase {
    policy?: shared.Policy;
}
export declare class PostPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPolicies200ApplicationJSONObject?: PostPolicies200ApplicationJSON;
}
