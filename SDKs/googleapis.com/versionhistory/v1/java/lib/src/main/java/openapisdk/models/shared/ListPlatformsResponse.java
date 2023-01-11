package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPlatformsResponse
 * Response message for ListPlatforms.
**/
public class ListPlatformsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPlatformsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public Platform[] platforms;
    public ListPlatformsResponse withPlatforms(Platform[] platforms) {
        this.platforms = platforms;
        return this;
    }
}