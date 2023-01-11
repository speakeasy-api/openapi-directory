package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MediaTypeHolderWrapped {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public MediaTypeHolderWrapped withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public MediaTypeHolderWrapped withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public MediaTypeHolder[] results;
    public MediaTypeHolderWrapped withResults(MediaTypeHolder[] results) {
        this.results = results;
        return this;
    }
}