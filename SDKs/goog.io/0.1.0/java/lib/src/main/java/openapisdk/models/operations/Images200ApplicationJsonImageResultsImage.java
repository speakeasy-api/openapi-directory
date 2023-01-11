package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Images200ApplicationJsonImageResultsImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alt")
    public String alt;
    public Images200ApplicationJsonImageResultsImage withAlt(String alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public Images200ApplicationJsonImageResultsImage withSrc(String src) {
        this.src = src;
        return this;
    }
}