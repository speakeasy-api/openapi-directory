import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyPolicyRequest extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject?: Record<string, any>;
}
