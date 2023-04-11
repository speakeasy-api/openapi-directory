import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationPolicyObjectsGroupRequest extends SpeakeasyBase {
    organizationId: string;
    policyObjectGroupId: string;
}
export declare class GetOrganizationPolicyObjectsGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationPolicyObjectsGroup200ApplicationJSONObject?: Record<string, any>;
}
