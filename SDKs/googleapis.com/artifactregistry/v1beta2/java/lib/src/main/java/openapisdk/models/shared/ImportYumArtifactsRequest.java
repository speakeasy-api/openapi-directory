package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportYumArtifactsRequest
 * The request to import new yum artifacts.
**/
public class ImportYumArtifactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public ImportYumArtifactsGcsSource gcsSource;
    public ImportYumArtifactsRequest withGcsSource(ImportYumArtifactsGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}