package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleExampleLibraryagentV1ListBooksResponse
 * Response message for LibraryAgent.ListBooks.
**/
public class GoogleExampleLibraryagentV1ListBooksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("books")
    public GoogleExampleLibraryagentV1Book[] books;
    public GoogleExampleLibraryagentV1ListBooksResponse withBooks(GoogleExampleLibraryagentV1Book[] books) {
        this.books = books;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleExampleLibraryagentV1ListBooksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}