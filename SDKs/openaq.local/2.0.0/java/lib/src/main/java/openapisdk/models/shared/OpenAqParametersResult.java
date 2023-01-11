package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqParametersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public OpenAqParametersResultMeta meta;
    public OpenAqParametersResult withMeta(OpenAqParametersResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("results")
    public ParametersRow[] results;
    public OpenAqParametersResult withResults(ParametersRow[] results) {
        this.results = results;
        return this;
    }
}