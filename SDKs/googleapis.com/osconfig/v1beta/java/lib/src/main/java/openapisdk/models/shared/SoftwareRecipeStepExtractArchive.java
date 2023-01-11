package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepExtractArchive
 * Extracts an archive of the type specified in the specified directory.
**/
public class SoftwareRecipeStepExtractArchive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public SoftwareRecipeStepExtractArchive withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public SoftwareRecipeStepExtractArchive withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SoftwareRecipeStepExtractArchiveTypeEnum type;
    public SoftwareRecipeStepExtractArchive withType(SoftwareRecipeStepExtractArchiveTypeEnum type) {
        this.type = type;
        return this;
    }
}