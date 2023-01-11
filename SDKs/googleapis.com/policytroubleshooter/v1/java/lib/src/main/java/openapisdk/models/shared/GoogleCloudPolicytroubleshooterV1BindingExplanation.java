package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1BindingExplanation
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
public class GoogleCloudPolicytroubleshooterV1BindingExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withAccess(GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GoogleTypeExpr condition;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withCondition(GoogleTypeExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public java.util.Map<String, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership> memberships;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withMemberships(java.util.Map<String, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership> memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withRelevance(GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermission")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum rolePermission;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withRolePermission(GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum rolePermission) {
        this.rolePermission = rolePermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermissionRelevance")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance;
    public GoogleCloudPolicytroubleshooterV1BindingExplanation withRolePermissionRelevance(GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance) {
        this.rolePermissionRelevance = rolePermissionRelevance;
        return this;
    }
}