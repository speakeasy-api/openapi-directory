package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public MetadataItems[] items;
    public Metadata withItems(MetadataItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Metadata withKind(String kind) {
        this.kind = kind;
        return this;
    }
}