package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceCredentialsCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServiceCredential[] data;
    public ServiceCredentialsCollection withData(ServiceCredential[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServiceCredentialsCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServiceCredentialsCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}