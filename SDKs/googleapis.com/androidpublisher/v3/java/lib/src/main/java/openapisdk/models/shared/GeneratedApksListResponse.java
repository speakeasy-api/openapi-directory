package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedApksListResponse
 * Response to list generated APKs.
**/
public class GeneratedApksListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedApks")
    public GeneratedApksPerSigningKey[] generatedApks;
    public GeneratedApksListResponse withGeneratedApks(GeneratedApksPerSigningKey[] generatedApks) {
        this.generatedApks = generatedApks;
        return this;
    }
}