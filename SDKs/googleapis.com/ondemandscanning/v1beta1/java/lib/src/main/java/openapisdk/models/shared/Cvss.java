package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cvss
 * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
**/
public class Cvss {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackComplexity")
    public CvssAttackComplexityEnum attackComplexity;
    public Cvss withAttackComplexity(CvssAttackComplexityEnum attackComplexity) {
        this.attackComplexity = attackComplexity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackVector")
    public CvssAttackVectorEnum attackVector;
    public Cvss withAttackVector(CvssAttackVectorEnum attackVector) {
        this.attackVector = attackVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication")
    public CvssAuthenticationEnum authentication;
    public Cvss withAuthentication(CvssAuthenticationEnum authentication) {
        this.authentication = authentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityImpact")
    public CvssAvailabilityImpactEnum availabilityImpact;
    public Cvss withAvailabilityImpact(CvssAvailabilityImpactEnum availabilityImpact) {
        this.availabilityImpact = availabilityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseScore")
    public Float baseScore;
    public Cvss withBaseScore(Float baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidentialityImpact")
    public CvssConfidentialityImpactEnum confidentialityImpact;
    public Cvss withConfidentialityImpact(CvssConfidentialityImpactEnum confidentialityImpact) {
        this.confidentialityImpact = confidentialityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exploitabilityScore")
    public Float exploitabilityScore;
    public Cvss withExploitabilityScore(Float exploitabilityScore) {
        this.exploitabilityScore = exploitabilityScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impactScore")
    public Float impactScore;
    public Cvss withImpactScore(Float impactScore) {
        this.impactScore = impactScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrityImpact")
    public CvssIntegrityImpactEnum integrityImpact;
    public Cvss withIntegrityImpact(CvssIntegrityImpactEnum integrityImpact) {
        this.integrityImpact = integrityImpact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privilegesRequired")
    public CvssPrivilegesRequiredEnum privilegesRequired;
    public Cvss withPrivilegesRequired(CvssPrivilegesRequiredEnum privilegesRequired) {
        this.privilegesRequired = privilegesRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public CvssScopeEnum scope;
    public Cvss withScope(CvssScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInteraction")
    public CvssUserInteractionEnum userInteraction;
    public Cvss withUserInteraction(CvssUserInteractionEnum userInteraction) {
        this.userInteraction = userInteraction;
        return this;
    }
}