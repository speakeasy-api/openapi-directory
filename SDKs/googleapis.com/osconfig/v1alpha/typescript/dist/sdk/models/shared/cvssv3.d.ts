import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
 */
export declare enum CVSSv3AttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}
/**
 * This metric reflects the context by which vulnerability exploitation is possible.
 */
export declare enum CVSSv3AttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}
/**
 * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
 */
export declare enum CVSSv3AvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
 */
export declare enum CVSSv3ConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric measures the impact to integrity of a successfully exploited vulnerability.
 */
export declare enum CVSSv3IntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
/**
 * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
 */
export declare enum CVSSv3PrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}
/**
 * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
 */
export declare enum CVSSv3ScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}
/**
 * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
 */
export declare enum CVSSv3UserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}
/**
 * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
 */
export declare class CVSSv3 extends SpeakeasyBase {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: CVSSv3AttackComplexityEnum;
    /**
     * This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: CVSSv3AttackVectorEnum;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: CVSSv3AvailabilityImpactEnum;
    /**
     * The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics
     */
    baseScore?: number;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: CVSSv3ConfidentialityImpactEnum;
    /**
     * The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics
     */
    exploitabilityScore?: number;
    /**
     * The Impact sub-score equation is derived from the Base Impact metrics.
     */
    impactScore?: number;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: CVSSv3IntegrityImpactEnum;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: CVSSv3PrivilegesRequiredEnum;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: CVSSv3ScopeEnum;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: CVSSv3UserInteractionEnum;
}
