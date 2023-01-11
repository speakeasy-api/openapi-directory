package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboundSsoAssignment
 * Targets with "set" SSO assignments and their respective assignments.
**/
public class InboundSsoAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public InboundSsoAssignment withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InboundSsoAssignment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Integer rank;
    public InboundSsoAssignment withRank(Integer rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlSsoInfo")
    public SamlSsoInfo samlSsoInfo;
    public InboundSsoAssignment withSamlSsoInfo(SamlSsoInfo samlSsoInfo) {
        this.samlSsoInfo = samlSsoInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signInBehavior")
    public SignInBehavior signInBehavior;
    public InboundSsoAssignment withSignInBehavior(SignInBehavior signInBehavior) {
        this.signInBehavior = signInBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssoMode")
    public InboundSsoAssignmentSsoModeEnum ssoMode;
    public InboundSsoAssignment withSsoMode(InboundSsoAssignmentSsoModeEnum ssoMode) {
        this.ssoMode = ssoMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroup")
    public String targetGroup;
    public InboundSsoAssignment withTargetGroup(String targetGroup) {
        this.targetGroup = targetGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetOrgUnit")
    public String targetOrgUnit;
    public InboundSsoAssignment withTargetOrgUnit(String targetOrgUnit) {
        this.targetOrgUnit = targetOrgUnit;
        return this;
    }
}