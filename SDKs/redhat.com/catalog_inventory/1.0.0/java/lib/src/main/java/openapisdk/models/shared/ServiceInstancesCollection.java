package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceInstancesCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServiceInstance[] data;
    public ServiceInstancesCollection withData(ServiceInstance[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServiceInstancesCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServiceInstancesCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}