package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStepThumbnailsResponse
 * A response containing the thumbnails in a step.
**/
public class ListStepThumbnailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListStepThumbnailsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public Image[] thumbnails;
    public ListStepThumbnailsResponse withThumbnails(Image[] thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
}