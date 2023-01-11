package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateExclusivityManifestResponse
 * The response of the exclusivity artifacts manifests for the client to apply.
**/
public class GenerateExclusivityManifestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crManifest")
    public String crManifest;
    public GenerateExclusivityManifestResponse withCrManifest(String crManifest) {
        this.crManifest = crManifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crdManifest")
    public String crdManifest;
    public GenerateExclusivityManifestResponse withCrdManifest(String crdManifest) {
        this.crdManifest = crdManifest;
        return this;
    }
}