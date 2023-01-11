package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListImageVersionsResponse
 * The ImageVersions in a project and location.
**/
public class ListImageVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersions")
    public ImageVersion[] imageVersions;
    public ListImageVersionsResponse withImageVersions(ImageVersion[] imageVersions) {
        this.imageVersions = imageVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListImageVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}