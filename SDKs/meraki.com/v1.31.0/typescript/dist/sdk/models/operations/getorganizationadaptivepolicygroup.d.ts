import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyGroupRequest extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyGroup200ApplicationJSONObject?: Record<string, any>;
}
