package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainMapping
 * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
**/
public class DomainMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public String apiVersion;
    public DomainMapping withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DomainMapping withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ObjectMeta metadata;
    public DomainMapping withMetadata(ObjectMeta metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public DomainMappingSpec spec;
    public DomainMapping withSpec(DomainMappingSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DomainMappingStatus status;
    public DomainMapping withStatus(DomainMappingStatus status) {
        this.status = status;
        return this;
    }
}