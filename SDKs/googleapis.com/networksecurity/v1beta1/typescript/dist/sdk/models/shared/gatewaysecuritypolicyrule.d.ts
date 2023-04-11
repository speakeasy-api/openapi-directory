import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Profile which tells what the primitive action should be.
 */
export declare enum GatewaySecurityPolicyRuleBasicProfileEnum {
    BasicProfileUnspecified = "BASIC_PROFILE_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.
 */
export declare class GatewaySecurityPolicyRule extends SpeakeasyBase {
    /**
     * Optional. CEL expression for matching on L7/application level criteria.
     */
    applicationMatcher?: string;
    /**
     * Required. Profile which tells what the primitive action should be.
     */
    basicProfile?: GatewaySecurityPolicyRuleBasicProfileEnum;
    /**
     * Output only. Time when the rule was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Whether the rule is enforced.
     */
    enabled?: boolean;
    /**
     * Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Required. Priority of the rule. Lower number corresponds to higher precedence.
     */
    priority?: number;
    /**
     * Required. CEL expression for matching on session criteria.
     */
    sessionMatcher?: string;
    /**
     * Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.
     */
    tlsInspectionEnabled?: boolean;
    /**
     * Output only. Time when the rule was updated.
     */
    updateTime?: string;
}
/**
 * The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.
 */
export declare class GatewaySecurityPolicyRuleInput extends SpeakeasyBase {
    /**
     * Optional. CEL expression for matching on L7/application level criteria.
     */
    applicationMatcher?: string;
    /**
     * Required. Profile which tells what the primitive action should be.
     */
    basicProfile?: GatewaySecurityPolicyRuleBasicProfileEnum;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Whether the rule is enforced.
     */
    enabled?: boolean;
    /**
     * Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Required. Priority of the rule. Lower number corresponds to higher precedence.
     */
    priority?: number;
    /**
     * Required. CEL expression for matching on session criteria.
     */
    sessionMatcher?: string;
    /**
     * Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.
     */
    tlsInspectionEnabled?: boolean;
}
