import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CVSSAttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}
/**
 * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
 */
export declare enum CVSSAttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}
export declare enum CVSSAuthenticationEnum {
    AuthenticationUnspecified = "AUTHENTICATION_UNSPECIFIED",
    AuthenticationMultiple = "AUTHENTICATION_MULTIPLE",
    AuthenticationSingle = "AUTHENTICATION_SINGLE",
    AuthenticationNone = "AUTHENTICATION_NONE"
}
export declare enum CVSSAvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CVSSConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CVSSIntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CVSSPrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}
export declare enum CVSSScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}
export declare enum CVSSUserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}
/**
 * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
 */
export declare class Cvss extends SpeakeasyBase {
    attackComplexity?: CVSSAttackComplexityEnum;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
     */
    attackVector?: CVSSAttackVectorEnum;
    authentication?: CVSSAuthenticationEnum;
    availabilityImpact?: CVSSAvailabilityImpactEnum;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number;
    confidentialityImpact?: CVSSConfidentialityImpactEnum;
    exploitabilityScore?: number;
    impactScore?: number;
    integrityImpact?: CVSSIntegrityImpactEnum;
    privilegesRequired?: CVSSPrivilegesRequiredEnum;
    scope?: CVSSScopeEnum;
    userInteraction?: CVSSUserInteractionEnum;
}
