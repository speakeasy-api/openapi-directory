import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IP version of adpative policy ACL. One of: 'any', 'ipv4' or 'ipv6'
 */
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * 'allow' or 'deny' traffic specified by this rule.
 */
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any').
 */
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class CreateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
    /**
     * Destination port. Must be in the format of single port: '1', port list: '1,2' or port range: '1-10', and in the range of 1-65535, or 'any'. Default is 'any'.
     */
    dstPort?: string;
    /**
     * 'allow' or 'deny' traffic specified by this rule.
     */
    policy: CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any').
     */
    protocol: CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
    /**
     * Source port. Must be in the format of single port: '1', port list: '1,2' or port range: '1-10', and in the range of 1-65535, or 'any'. Default is 'any'.
     */
    srcPort?: string;
}
export declare class CreateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
    /**
     * Description of the adaptive policy ACL
     */
    description?: string;
    /**
     * IP version of adpative policy ACL. One of: 'any', 'ipv4' or 'ipv6'
     */
    ipVersion: CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
    /**
     * Name of the adaptive policy ACL
     */
    name: string;
    /**
     * An ordered array of the adaptive policy ACL rules.
     */
    rules: CreateOrganizationAdaptivePolicyAclRequestBodyRules[];
}
export declare class CreateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationAdaptivePolicyAclRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationAdaptivePolicyAcl200ApplicationJSONObject?: Record<string, any>;
}
