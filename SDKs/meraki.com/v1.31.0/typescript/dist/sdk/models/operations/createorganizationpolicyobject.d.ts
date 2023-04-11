import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationPolicyObjectRequestBody extends SpeakeasyBase {
    /**
     * Category of a policy object (one of: adaptivePolicy, network)
     */
    category: string;
    /**
     * CIDR Value of a policy object (e.g. 10.11.12.1/24")
     */
    cidr?: string;
    /**
     * Fully qualified domain name of policy object (e.g. "example.com")
     */
    fqdn?: string;
    /**
     * The IDs of policy object groups the policy object belongs to
     */
    groupIds?: number[];
    /**
     * IP Address of a policy object (e.g. "1.2.3.4")
     */
    ip?: string;
    /**
     * Mask of a policy object (e.g. "255.255.0.0")
     */
    mask?: string;
    /**
     * Name of a policy object, unique within the organization (alphanumeric, space, dash, or underscore characters only)
     */
    name: string;
    /**
     * Type of a policy object (one of: adaptivePolicyIpv4Cidr, cidr, fqdn, ipAndMask)
     */
    type: string;
}
export declare class CreateOrganizationPolicyObjectRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationPolicyObjectRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationPolicyObjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationPolicyObject201ApplicationJSONObject?: Record<string, any>;
}
