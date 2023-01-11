package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2CustomConstraint
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
public class GoogleCloudOrgpolicyV2CustomConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum actionType;
    public GoogleCloudOrgpolicyV2CustomConstraint withActionType(GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public GoogleCloudOrgpolicyV2CustomConstraint withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudOrgpolicyV2CustomConstraint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudOrgpolicyV2CustomConstraint withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodTypes")
    public GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[] methodTypes;
    public GoogleCloudOrgpolicyV2CustomConstraint withMethodTypes(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[] methodTypes) {
        this.methodTypes = methodTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudOrgpolicyV2CustomConstraint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTypes")
    public String[] resourceTypes;
    public GoogleCloudOrgpolicyV2CustomConstraint withResourceTypes(String[] resourceTypes) {
        this.resourceTypes = resourceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudOrgpolicyV2CustomConstraint withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}