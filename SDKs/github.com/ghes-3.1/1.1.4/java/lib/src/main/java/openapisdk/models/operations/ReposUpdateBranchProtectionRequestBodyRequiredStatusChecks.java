package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
 * Require status checks to pass before merging. Set to `null` to disable.
**/
public class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonProperty("strict")
    public Boolean strict;
    public ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
}