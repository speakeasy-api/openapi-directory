package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public OpenAqResultMeta meta;
    public OpenAqResult withMeta(OpenAqResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object[] results;
    public OpenAqResult withResults(Object[] results) {
        this.results = results;
        return this;
    }
}