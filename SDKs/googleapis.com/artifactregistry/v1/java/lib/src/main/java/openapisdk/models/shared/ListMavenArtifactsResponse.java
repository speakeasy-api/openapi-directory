package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMavenArtifactsResponse
 * The response from listing maven artifacts.
**/
public class ListMavenArtifactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mavenArtifacts")
    public MavenArtifact[] mavenArtifacts;
    public ListMavenArtifactsResponse withMavenArtifacts(MavenArtifact[] mavenArtifacts) {
        this.mavenArtifacts = mavenArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMavenArtifactsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}