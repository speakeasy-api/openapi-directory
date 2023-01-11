package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeArtifactRemote
 * Specifies an artifact available via some URI.
**/
public class SoftwareRecipeArtifactRemote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksum")
    public String checksum;
    public SoftwareRecipeArtifactRemote withChecksum(String checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public SoftwareRecipeArtifactRemote withUri(String uri) {
        this.uri = uri;
        return this;
    }
}