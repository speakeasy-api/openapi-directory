package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cvssv3
 * Common Vulnerability Scoring System version 3.
**/
public class Cvssv3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackComplexity")
    public Cvssv3AttackComplexityEnum attackComplexity;
    public Cvssv3 withAttackComplexity(Cvssv3AttackComplexityEnum attackComplexity) {
        this.attackComplexity = attackComplexity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackVector")
    public Cvssv3AttackVectorEnum attackVector;
    public Cvssv3 withAttackVector(Cvssv3AttackVectorEnum attackVector) {
        this.attackVector = attackVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityImpact")
    public Cvssv3AvailabilityImpactEnum availabilityImpact;
    public Cvssv3 withAvailabilityImpact(Cvssv3AvailabilityImpactEnum availabilityImpact) {
        this.availabilityImpact = availabilityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseScore")
    public Double baseScore;
    public Cvssv3 withBaseScore(Double baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidentialityImpact")
    public Cvssv3ConfidentialityImpactEnum confidentialityImpact;
    public Cvssv3 withConfidentialityImpact(Cvssv3ConfidentialityImpactEnum confidentialityImpact) {
        this.confidentialityImpact = confidentialityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrityImpact")
    public Cvssv3IntegrityImpactEnum integrityImpact;
    public Cvssv3 withIntegrityImpact(Cvssv3IntegrityImpactEnum integrityImpact) {
        this.integrityImpact = integrityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privilegesRequired")
    public Cvssv3PrivilegesRequiredEnum privilegesRequired;
    public Cvssv3 withPrivilegesRequired(Cvssv3PrivilegesRequiredEnum privilegesRequired) {
        this.privilegesRequired = privilegesRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public Cvssv3ScopeEnum scope;
    public Cvssv3 withScope(Cvssv3ScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInteraction")
    public Cvssv3UserInteractionEnum userInteraction;
    public Cvssv3 withUserInteraction(Cvssv3UserInteractionEnum userInteraction) {
        this.userInteraction = userInteraction;
        return this;
    }
}