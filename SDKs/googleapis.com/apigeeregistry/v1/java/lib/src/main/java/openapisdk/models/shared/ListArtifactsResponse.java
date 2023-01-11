package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListArtifactsResponse
 * Response message for ListArtifacts.
**/
public class ListArtifactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public Artifact[] artifacts;
    public ListArtifactsResponse withArtifacts(Artifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListArtifactsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}