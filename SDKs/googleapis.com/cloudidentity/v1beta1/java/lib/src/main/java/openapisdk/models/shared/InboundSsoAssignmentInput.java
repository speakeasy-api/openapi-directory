package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboundSsoAssignmentInput
 * Targets with "set" SSO assignments and their respective assignments.
**/
public class InboundSsoAssignmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public InboundSsoAssignmentInput withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Integer rank;
    public InboundSsoAssignmentInput withRank(Integer rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlSsoInfo")
    public SamlSsoInfo samlSsoInfo;
    public InboundSsoAssignmentInput withSamlSsoInfo(SamlSsoInfo samlSsoInfo) {
        this.samlSsoInfo = samlSsoInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signInBehavior")
    public SignInBehavior signInBehavior;
    public InboundSsoAssignmentInput withSignInBehavior(SignInBehavior signInBehavior) {
        this.signInBehavior = signInBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssoMode")
    public InboundSsoAssignmentSsoModeEnum ssoMode;
    public InboundSsoAssignmentInput withSsoMode(InboundSsoAssignmentSsoModeEnum ssoMode) {
        this.ssoMode = ssoMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroup")
    public String targetGroup;
    public InboundSsoAssignmentInput withTargetGroup(String targetGroup) {
        this.targetGroup = targetGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetOrgUnit")
    public String targetOrgUnit;
    public InboundSsoAssignmentInput withTargetOrgUnit(String targetOrgUnit) {
        this.targetOrgUnit = targetOrgUnit;
        return this;
    }
}