package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleExampleLibraryagentV1ListShelvesResponse
 * Response message for LibraryAgent.ListShelves.
**/
public class GoogleExampleLibraryagentV1ListShelvesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleExampleLibraryagentV1ListShelvesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shelves")
    public GoogleExampleLibraryagentV1Shelf[] shelves;
    public GoogleExampleLibraryagentV1ListShelvesResponse withShelves(GoogleExampleLibraryagentV1Shelf[] shelves) {
        this.shelves = shelves;
        return this;
    }
}