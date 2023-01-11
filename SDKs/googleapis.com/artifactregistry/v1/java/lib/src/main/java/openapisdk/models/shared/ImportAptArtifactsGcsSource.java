package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportAptArtifactsGcsSource
 * Google Cloud Storage location where the artifacts currently reside.
**/
public class ImportAptArtifactsGcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public ImportAptArtifactsGcsSource withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useWildcards")
    public Boolean useWildcards;
    public ImportAptArtifactsGcsSource withUseWildcards(Boolean useWildcards) {
        this.useWildcards = useWildcards;
        return this;
    }
}