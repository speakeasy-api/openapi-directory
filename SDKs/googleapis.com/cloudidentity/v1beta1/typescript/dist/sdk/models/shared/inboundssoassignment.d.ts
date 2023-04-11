import { SpeakeasyBase } from "../../../internal/utils";
import { SamlSsoInfo } from "./samlssoinfo";
import { SignInBehavior } from "./signinbehavior";
/**
 * Inbound SSO behavior.
 */
export declare enum InboundSsoAssignmentSsoModeEnum {
    SsoModeUnspecified = "SSO_MODE_UNSPECIFIED",
    SsoOff = "SSO_OFF",
    SamlSso = "SAML_SSO",
    DomainWideSamlIfEnabled = "DOMAIN_WIDE_SAML_IF_ENABLED"
}
/**
 * Targets with "set" SSO assignments and their respective assignments.
 */
export declare class InboundSsoAssignmentInput extends SpeakeasyBase {
    /**
     * Immutable. The customer. For example: `customers/C0123abc`.
     */
    customer?: string;
    /**
     * Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.
     */
    rank?: number;
    /**
     * Details that are applicable when `sso_mode` == `SAML_SSO`.
     */
    samlSsoInfo?: SamlSsoInfo;
    /**
     * Controls sign-in behavior.
     */
    signInBehavior?: SignInBehavior;
    /**
     * Inbound SSO behavior.
     */
    ssoMode?: InboundSsoAssignmentSsoModeEnum;
    /**
     * Immutable. Must be of the form `groups/{group}`.
     */
    targetGroup?: string;
    /**
     * Immutable. Must be of the form `orgUnits/{org_unit}`.
     */
    targetOrgUnit?: string;
}
/**
 * Targets with "set" SSO assignments and their respective assignments.
 */
export declare class InboundSsoAssignment extends SpeakeasyBase {
    /**
     * Immutable. The customer. For example: `customers/C0123abc`.
     */
    customer?: string;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.
     */
    name?: string;
    /**
     * Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.
     */
    rank?: number;
    /**
     * Details that are applicable when `sso_mode` == `SAML_SSO`.
     */
    samlSsoInfo?: SamlSsoInfo;
    /**
     * Controls sign-in behavior.
     */
    signInBehavior?: SignInBehavior;
    /**
     * Inbound SSO behavior.
     */
    ssoMode?: InboundSsoAssignmentSsoModeEnum;
    /**
     * Immutable. Must be of the form `groups/{group}`.
     */
    targetGroup?: string;
    /**
     * Immutable. Must be of the form `orgUnits/{org_unit}`.
     */
    targetOrgUnit?: string;
}
