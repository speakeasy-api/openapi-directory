package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CvsSv3
 * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
**/
public class CvsSv3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackComplexity")
    public CvsSv3AttackComplexityEnum attackComplexity;
    public CvsSv3 withAttackComplexity(CvsSv3AttackComplexityEnum attackComplexity) {
        this.attackComplexity = attackComplexity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackVector")
    public CvsSv3AttackVectorEnum attackVector;
    public CvsSv3 withAttackVector(CvsSv3AttackVectorEnum attackVector) {
        this.attackVector = attackVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityImpact")
    public CvsSv3AvailabilityImpactEnum availabilityImpact;
    public CvsSv3 withAvailabilityImpact(CvsSv3AvailabilityImpactEnum availabilityImpact) {
        this.availabilityImpact = availabilityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseScore")
    public Float baseScore;
    public CvsSv3 withBaseScore(Float baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidentialityImpact")
    public CvsSv3ConfidentialityImpactEnum confidentialityImpact;
    public CvsSv3 withConfidentialityImpact(CvsSv3ConfidentialityImpactEnum confidentialityImpact) {
        this.confidentialityImpact = confidentialityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exploitabilityScore")
    public Float exploitabilityScore;
    public CvsSv3 withExploitabilityScore(Float exploitabilityScore) {
        this.exploitabilityScore = exploitabilityScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impactScore")
    public Float impactScore;
    public CvsSv3 withImpactScore(Float impactScore) {
        this.impactScore = impactScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrityImpact")
    public CvsSv3IntegrityImpactEnum integrityImpact;
    public CvsSv3 withIntegrityImpact(CvsSv3IntegrityImpactEnum integrityImpact) {
        this.integrityImpact = integrityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privilegesRequired")
    public CvsSv3PrivilegesRequiredEnum privilegesRequired;
    public CvsSv3 withPrivilegesRequired(CvsSv3PrivilegesRequiredEnum privilegesRequired) {
        this.privilegesRequired = privilegesRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public CvsSv3ScopeEnum scope;
    public CvsSv3 withScope(CvsSv3ScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInteraction")
    public CvsSv3UserInteractionEnum userInteraction;
    public CvsSv3 withUserInteraction(CvsSv3UserInteractionEnum userInteraction) {
        this.userInteraction = userInteraction;
        return this;
    }
}