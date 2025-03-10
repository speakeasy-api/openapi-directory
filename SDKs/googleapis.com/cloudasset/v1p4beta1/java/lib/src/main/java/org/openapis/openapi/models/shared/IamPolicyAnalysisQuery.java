/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IamPolicyAnalysisQuery - IAM policy analysis query message.
 */
public class IamPolicyAnalysisQuery {
    /**
     * Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessSelector")
    public AccessSelector accessSelector;

    public IamPolicyAnalysisQuery withAccessSelector(AccessSelector accessSelector) {
        this.accessSelector = accessSelector;
        return this;
    }
    
    /**
     * Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identitySelector")
    public IdentitySelector identitySelector;

    public IamPolicyAnalysisQuery withIdentitySelector(IdentitySelector identitySelector) {
        this.identitySelector = identitySelector;
        return this;
    }
    
    /**
     * Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;

    public IamPolicyAnalysisQuery withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSelector")
    public ResourceSelector resourceSelector;

    public IamPolicyAnalysisQuery withResourceSelector(ResourceSelector resourceSelector) {
        this.resourceSelector = resourceSelector;
        return this;
    }
    
    public IamPolicyAnalysisQuery(){}
}
