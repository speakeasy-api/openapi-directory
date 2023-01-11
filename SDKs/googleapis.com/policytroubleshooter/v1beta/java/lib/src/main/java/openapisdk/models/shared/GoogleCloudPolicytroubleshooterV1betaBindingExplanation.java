package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1betaBindingExplanation
 * Details about how a binding in a policy affects a member's ability to use a permission.
**/
public class GoogleCloudPolicytroubleshooterV1betaBindingExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withAccess(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GoogleTypeExpr condition;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withCondition(GoogleTypeExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public java.util.Map<String, GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership> memberships;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withMemberships(java.util.Map<String, GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership> memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withRelevance(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermission")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum rolePermission;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withRolePermission(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum rolePermission) {
        this.rolePermission = rolePermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolePermissionRelevance")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation withRolePermissionRelevance(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum rolePermissionRelevance) {
        this.rolePermissionRelevance = rolePermissionRelevance;
        return this;
    }
}