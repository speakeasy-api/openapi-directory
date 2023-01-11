package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicyAnalysisResult
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
**/
public class IamPolicyAnalysisResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessControlLists")
    public GoogleCloudAssetV1p4beta1AccessControlList[] accessControlLists;
    public IamPolicyAnalysisResult withAccessControlLists(GoogleCloudAssetV1p4beta1AccessControlList[] accessControlLists) {
        this.accessControlLists = accessControlLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachedResourceFullName")
    public String attachedResourceFullName;
    public IamPolicyAnalysisResult withAttachedResourceFullName(String attachedResourceFullName) {
        this.attachedResourceFullName = attachedResourceFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullyExplored")
    public Boolean fullyExplored;
    public IamPolicyAnalysisResult withFullyExplored(Boolean fullyExplored) {
        this.fullyExplored = fullyExplored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamBinding")
    public Binding iamBinding;
    public IamPolicyAnalysisResult withIamBinding(Binding iamBinding) {
        this.iamBinding = iamBinding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityList")
    public GoogleCloudAssetV1p4beta1IdentityList identityList;
    public IamPolicyAnalysisResult withIdentityList(GoogleCloudAssetV1p4beta1IdentityList identityList) {
        this.identityList = identityList;
        return this;
    }
}