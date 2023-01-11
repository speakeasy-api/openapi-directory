package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2Constraint
 * A `constraint` describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organization by setting a `policy` that includes `constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `policy` being defined or inherited for the resource in question.
**/
public class GoogleCloudOrgpolicyV2Constraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanConstraint")
    public java.util.Map<String, Object> booleanConstraint;
    public GoogleCloudOrgpolicyV2Constraint withBooleanConstraint(java.util.Map<String, Object> booleanConstraint) {
        this.booleanConstraint = booleanConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraintDefault")
    public GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum constraintDefault;
    public GoogleCloudOrgpolicyV2Constraint withConstraintDefault(GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum constraintDefault) {
        this.constraintDefault = constraintDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudOrgpolicyV2Constraint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudOrgpolicyV2Constraint withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listConstraint")
    public GoogleCloudOrgpolicyV2ConstraintListConstraint listConstraint;
    public GoogleCloudOrgpolicyV2Constraint withListConstraint(GoogleCloudOrgpolicyV2ConstraintListConstraint listConstraint) {
        this.listConstraint = listConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudOrgpolicyV2Constraint withName(String name) {
        this.name = name;
        return this;
    }
}