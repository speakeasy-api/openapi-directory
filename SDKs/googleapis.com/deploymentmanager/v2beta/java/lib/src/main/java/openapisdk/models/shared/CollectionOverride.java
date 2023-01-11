package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectionOverride
 * CollectionOverride allows resource handling overrides for specific resources within a BaseType
**/
public class CollectionOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public CollectionOverride withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Options options;
    public CollectionOverride withOptions(Options options) {
        this.options = options;
        return this;
    }
}