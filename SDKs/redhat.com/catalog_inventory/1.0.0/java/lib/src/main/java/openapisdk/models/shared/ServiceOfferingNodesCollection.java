package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceOfferingNodesCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServiceOfferingNode[] data;
    public ServiceOfferingNodesCollection withData(ServiceOfferingNode[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServiceOfferingNodesCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServiceOfferingNodesCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}