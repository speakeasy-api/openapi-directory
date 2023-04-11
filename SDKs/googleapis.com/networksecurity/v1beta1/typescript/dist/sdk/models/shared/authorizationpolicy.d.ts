import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
 */
export declare enum AuthorizationPolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
 */
export declare class AuthorizationPolicy extends SpeakeasyBase {
    /**
     * Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
     */
    action?: AuthorizationPolicyActionEnum;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the AuthorizationPolicy resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`.
     */
    name?: string;
    /**
     * Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request.
     */
    rules?: Rule[];
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
 */
export declare class AuthorizationPolicyInput extends SpeakeasyBase {
    /**
     * Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
     */
    action?: AuthorizationPolicyActionEnum;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the AuthorizationPolicy resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`.
     */
    name?: string;
    /**
     * Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request.
     */
    rules?: Rule[];
}
