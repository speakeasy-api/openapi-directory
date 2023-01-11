package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceCredentialTypesCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ServiceCredentialType[] data;
    public ServiceCredentialTypesCollection withData(ServiceCredentialType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CollectionLinks links;
    public ServiceCredentialTypesCollection withLinks(CollectionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CollectionMetadata meta;
    public ServiceCredentialTypesCollection withMeta(CollectionMetadata meta) {
        this.meta = meta;
        return this;
    }
}