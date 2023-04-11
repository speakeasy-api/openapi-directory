import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    aclId: string;
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyAcl200ApplicationJSONObject?: Record<string, any>;
}
