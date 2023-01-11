package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPlaceActionTypeMetadataResponse
 * Response message for PlaceActions.ListPlaceActionTypeMetadata.
**/
public class ListPlaceActionTypeMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPlaceActionTypeMetadataResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeActionTypeMetadata")
    public PlaceActionTypeMetadata[] placeActionTypeMetadata;
    public ListPlaceActionTypeMetadataResponse withPlaceActionTypeMetadata(PlaceActionTypeMetadata[] placeActionTypeMetadata) {
        this.placeActionTypeMetadata = placeActionTypeMetadata;
        return this;
    }
}