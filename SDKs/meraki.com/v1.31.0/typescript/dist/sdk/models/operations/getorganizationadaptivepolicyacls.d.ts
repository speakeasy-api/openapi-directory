import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyAclsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyAclsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects?: Record<string, any>[];
}
