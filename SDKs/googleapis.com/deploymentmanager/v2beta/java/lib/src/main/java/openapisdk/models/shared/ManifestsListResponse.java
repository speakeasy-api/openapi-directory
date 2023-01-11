package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManifestsListResponse
 * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
**/
public class ManifestsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifests")
    public Manifest[] manifests;
    public ManifestsListResponse withManifests(Manifest[] manifests) {
        this.manifests = manifests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ManifestsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}