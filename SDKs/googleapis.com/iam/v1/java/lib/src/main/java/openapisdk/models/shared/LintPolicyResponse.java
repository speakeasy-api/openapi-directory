package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LintPolicyResponse
 * The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
**/
public class LintPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lintResults")
    public LintResult[] lintResults;
    public LintPolicyResponse withLintResults(LintResult[] lintResults) {
        this.lintResults = lintResults;
        return this;
    }
}