package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServicePlansCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServicePlan[] data;
    public ServicePlansCollection withData(ServicePlan[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServicePlansCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServicePlansCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}