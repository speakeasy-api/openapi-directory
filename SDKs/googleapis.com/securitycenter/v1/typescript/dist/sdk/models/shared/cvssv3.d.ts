import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
 */
export declare enum Cvssv3AttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}
/**
 * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
 */
export declare enum Cvssv3AttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}
/**
 * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
 */
export declare enum Cvssv3AvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
 */
export declare enum Cvssv3ConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric measures the impact to integrity of a successfully exploited vulnerability.
 */
export declare enum Cvssv3IntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
 */
export declare enum Cvssv3PrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}
/**
 * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
 */
export declare enum Cvssv3ScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}
/**
 * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
 */
export declare enum Cvssv3UserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}
/**
 * Common Vulnerability Scoring System version 3.
 */
export declare class Cvssv3 extends SpeakeasyBase {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: Cvssv3AttackComplexityEnum;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: Cvssv3AttackVectorEnum;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: Cvssv3AvailabilityImpactEnum;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: Cvssv3ConfidentialityImpactEnum;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: Cvssv3IntegrityImpactEnum;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: Cvssv3PrivilegesRequiredEnum;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: Cvssv3ScopeEnum;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: Cvssv3UserInteractionEnum;
}
