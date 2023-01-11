package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MediaItemWrapped {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public MediaItemWrapped withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public MediaItemWrapped withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public MediaItem[] results;
    public MediaItemWrapped withResults(MediaItem[] results) {
        this.results = results;
        return this;
    }
}