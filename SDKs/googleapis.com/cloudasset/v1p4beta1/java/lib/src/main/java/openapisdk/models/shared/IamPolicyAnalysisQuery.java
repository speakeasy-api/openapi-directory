package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicyAnalysisQuery
 * IAM policy analysis query message.
**/
public class IamPolicyAnalysisQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessSelector")
    public AccessSelector accessSelector;
    public IamPolicyAnalysisQuery withAccessSelector(AccessSelector accessSelector) {
        this.accessSelector = accessSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identitySelector")
    public IdentitySelector identitySelector;
    public IamPolicyAnalysisQuery withIdentitySelector(IdentitySelector identitySelector) {
        this.identitySelector = identitySelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public IamPolicyAnalysisQuery withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSelector")
    public ResourceSelector resourceSelector;
    public IamPolicyAnalysisQuery withResourceSelector(ResourceSelector resourceSelector) {
        this.resourceSelector = resourceSelector;
        return this;
    }
}