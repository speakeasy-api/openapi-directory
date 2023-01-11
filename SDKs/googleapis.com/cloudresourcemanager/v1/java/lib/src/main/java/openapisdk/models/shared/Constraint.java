package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Constraint
 * A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question.
**/
public class Constraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanConstraint")
    public java.util.Map<String, Object> booleanConstraint;
    public Constraint withBooleanConstraint(java.util.Map<String, Object> booleanConstraint) {
        this.booleanConstraint = booleanConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraintDefault")
    public ConstraintConstraintDefaultEnum constraintDefault;
    public Constraint withConstraintDefault(ConstraintConstraintDefaultEnum constraintDefault) {
        this.constraintDefault = constraintDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Constraint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Constraint withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listConstraint")
    public ListConstraint listConstraint;
    public Constraint withListConstraint(ListConstraint listConstraint) {
        this.listConstraint = listConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Constraint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public Constraint withVersion(Integer version) {
        this.version = version;
        return this;
    }
}