package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1BindingExplanation
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
public class GoogleCloudPolicysimulatorV1BindingExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum access;
    public GoogleCloudPolicysimulatorV1BindingExplanation withAccess(GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GoogleTypeExpr condition;
    public GoogleCloudPolicysimulatorV1BindingExplanation withCondition(GoogleTypeExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public java.util.Map<String, GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership> memberships;
    public GoogleCloudPolicysimulatorV1BindingExplanation withMemberships(java.util.Map<String, GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership> memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum relevance;
    public GoogleCloudPolicysimulatorV1BindingExplanation withRelevance(GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GoogleCloudPolicysimulatorV1BindingExplanation withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermission")
    public GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum rolePermission;
    public GoogleCloudPolicysimulatorV1BindingExplanation withRolePermission(GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum rolePermission) {
        this.rolePermission = rolePermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermissionRelevance")
    public GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance;
    public GoogleCloudPolicysimulatorV1BindingExplanation withRolePermissionRelevance(GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance) {
        this.rolePermissionRelevance = rolePermissionRelevance;
        return this;
    }
}