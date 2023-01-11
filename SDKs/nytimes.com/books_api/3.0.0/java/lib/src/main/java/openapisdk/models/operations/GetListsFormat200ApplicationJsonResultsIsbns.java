package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsFormat200ApplicationJsonResultsIsbns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn10")
    public String isbn10;
    public GetListsFormat200ApplicationJsonResultsIsbns withIsbn10(String isbn10) {
        this.isbn10 = isbn10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn13")
    public String isbn13;
    public GetListsFormat200ApplicationJsonResultsIsbns withIsbn13(String isbn13) {
        this.isbn13 = isbn13;
        return this;
    }
}