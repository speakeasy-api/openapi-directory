package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tag")
    public TagTag tag;
    public Tag withTag(TagTag tag) {
        this.tag = tag;
        return this;
    }
}