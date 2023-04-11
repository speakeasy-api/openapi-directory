import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyGroupsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects?: Record<string, any>[];
}
