package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicySearchResult
 * The result for an IAM policy search.
**/
public class IamPolicySearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public Explanation explanation;
    public IamPolicySearchResult withExplanation(Explanation explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public Policy policy;
    public IamPolicySearchResult withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public IamPolicySearchResult withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public IamPolicySearchResult withResource(String resource) {
        this.resource = resource;
        return this;
    }
}