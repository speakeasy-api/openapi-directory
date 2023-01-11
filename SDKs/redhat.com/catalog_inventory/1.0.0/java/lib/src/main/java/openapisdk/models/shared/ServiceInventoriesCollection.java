package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceInventoriesCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServiceInventory[] data;
    public ServiceInventoriesCollection withData(ServiceInventory[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServiceInventoriesCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServiceInventoriesCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}