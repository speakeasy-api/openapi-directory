package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeArtifact
 * Specifies a resource to be used in the recipe.
**/
public class SoftwareRecipeArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowInsecure")
    public Boolean allowInsecure;
    public SoftwareRecipeArtifact withAllowInsecure(Boolean allowInsecure) {
        this.allowInsecure = allowInsecure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcs")
    public SoftwareRecipeArtifactGcs gcs;
    public SoftwareRecipeArtifact withGcs(SoftwareRecipeArtifactGcs gcs) {
        this.gcs = gcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SoftwareRecipeArtifact withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote")
    public SoftwareRecipeArtifactRemote remote;
    public SoftwareRecipeArtifact withRemote(SoftwareRecipeArtifactRemote remote) {
        this.remote = remote;
        return this;
    }
}