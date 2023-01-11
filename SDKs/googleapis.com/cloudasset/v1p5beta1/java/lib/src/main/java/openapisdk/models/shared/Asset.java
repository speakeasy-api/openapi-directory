package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asset
 * An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevel")
    public GoogleIdentityAccesscontextmanagerV1AccessLevel accessLevel;
    public Asset withAccessLevel(GoogleIdentityAccesscontextmanagerV1AccessLevel accessLevel) {
        this.accessLevel = accessLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPolicy")
    public GoogleIdentityAccesscontextmanagerV1AccessPolicy accessPolicy;
    public Asset withAccessPolicy(GoogleIdentityAccesscontextmanagerV1AccessPolicy accessPolicy) {
        this.accessPolicy = accessPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancestors")
    public String[] ancestors;
    public Asset withAncestors(String[] ancestors) {
        this.ancestors = ancestors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetType")
    public String assetType;
    public Asset withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamPolicy")
    public Policy iamPolicy;
    public Asset withIamPolicy(Policy iamPolicy) {
        this.iamPolicy = iamPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Asset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgPolicy")
    public GoogleCloudOrgpolicyV1Policy[] orgPolicy;
    public Asset withOrgPolicy(GoogleCloudOrgpolicyV1Policy[] orgPolicy) {
        this.orgPolicy = orgPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;
    public Asset withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePerimeter")
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeter servicePerimeter;
    public Asset withServicePerimeter(GoogleIdentityAccesscontextmanagerV1ServicePerimeter servicePerimeter) {
        this.servicePerimeter = servicePerimeter;
        return this;
    }
}