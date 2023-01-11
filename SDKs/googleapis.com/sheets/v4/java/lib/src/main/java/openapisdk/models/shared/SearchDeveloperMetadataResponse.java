package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchDeveloperMetadataResponse
 * A reply to a developer metadata search request.
**/
public class SearchDeveloperMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedDeveloperMetadata")
    public MatchedDeveloperMetadata[] matchedDeveloperMetadata;
    public SearchDeveloperMetadataResponse withMatchedDeveloperMetadata(MatchedDeveloperMetadata[] matchedDeveloperMetadata) {
        this.matchedDeveloperMetadata = matchedDeveloperMetadata;
        return this;
    }
}