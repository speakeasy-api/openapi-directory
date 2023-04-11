import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyPoliciesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects?: Record<string, any>[];
}
