import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.
 */
export declare class GatewaySecurityPolicy extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it.
     */
    tlsInspectionPolicy?: string;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.
 */
export declare class GatewaySecurityPolicyInput extends SpeakeasyBase {
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it.
     */
    tlsInspectionPolicy?: string;
}
