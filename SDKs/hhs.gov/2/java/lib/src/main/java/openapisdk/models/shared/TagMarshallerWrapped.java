package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagMarshallerWrapped {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public TagMarshallerWrapped withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public TagMarshallerWrapped withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public TagMarshaller[] results;
    public TagMarshallerWrapped withResults(TagMarshaller[] results) {
        this.results = results;
        return this;
    }
}