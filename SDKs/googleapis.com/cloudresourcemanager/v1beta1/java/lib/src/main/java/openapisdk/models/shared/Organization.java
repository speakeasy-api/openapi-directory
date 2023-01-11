package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Organization
 * The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
**/
public class Organization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Organization withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Organization withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleState")
    public OrganizationLifecycleStateEnum lifecycleState;
    public Organization withLifecycleState(OrganizationLifecycleStateEnum lifecycleState) {
        this.lifecycleState = lifecycleState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Organization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public Organization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public OrganizationOwner owner;
    public Organization withOwner(OrganizationOwner owner) {
        this.owner = owner;
        return this;
    }
}