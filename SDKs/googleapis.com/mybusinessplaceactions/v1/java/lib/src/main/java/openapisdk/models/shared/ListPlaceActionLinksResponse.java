package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPlaceActionLinksResponse
 * Response message for PlaceActions.ListPlaceActionLinks.
**/
public class ListPlaceActionLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPlaceActionLinksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeActionLinks")
    public PlaceActionLink[] placeActionLinks;
    public ListPlaceActionLinksResponse withPlaceActionLinks(PlaceActionLink[] placeActionLinks) {
        this.placeActionLinks = placeActionLinks;
        return this;
    }
}