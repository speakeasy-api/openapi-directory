package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateConnectManifestResponse
 * GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
**/
public class GenerateConnectManifestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public ConnectAgentResource[] manifest;
    public GenerateConnectManifestResponse withManifest(ConnectAgentResource[] manifest) {
        this.manifest = manifest;
        return this;
    }
}