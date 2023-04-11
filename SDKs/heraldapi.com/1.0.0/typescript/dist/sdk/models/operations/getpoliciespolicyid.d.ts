import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPoliciesPolicyIdRequest extends SpeakeasyBase {
    /**
     * `id` for a specific policy
     */
    policyId: string;
}
/**
 * OK
 */
export declare class GetPoliciesPolicyId200ApplicationJSON extends SpeakeasyBase {
    policy?: shared.Policy;
}
export declare class GetPoliciesPolicyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getPoliciesPolicyId200ApplicationJSONObject?: GetPoliciesPolicyId200ApplicationJSON;
}
