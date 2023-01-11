package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportAptArtifactsRequest
 * The request to import new apt artifacts.
**/
public class ImportAptArtifactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public ImportAptArtifactsGcsSource gcsSource;
    public ImportAptArtifactsRequest withGcsSource(ImportAptArtifactsGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}