package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectAgentResource
 * ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
**/
public class ConnectAgentResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public ConnectAgentResource withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TypeMeta type;
    public ConnectAgentResource withType(TypeMeta type) {
        this.type = type;
        return this;
    }
}