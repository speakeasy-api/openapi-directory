import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationPolicyObjectRequest extends SpeakeasyBase {
    organizationId: string;
    policyObjectId: string;
}
export declare class GetOrganizationPolicyObjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationPolicyObject200ApplicationJSONObject?: Record<string, any>;
}
