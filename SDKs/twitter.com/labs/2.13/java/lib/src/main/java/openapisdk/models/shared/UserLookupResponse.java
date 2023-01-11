package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserLookupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object[] data;
    public UserLookupResponse withData(Object[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Object[] errors;
    public UserLookupResponse withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includes")
    public Expansions includes;
    public UserLookupResponse withIncludes(Expansions includes) {
        this.includes = includes;
        return this;
    }
}