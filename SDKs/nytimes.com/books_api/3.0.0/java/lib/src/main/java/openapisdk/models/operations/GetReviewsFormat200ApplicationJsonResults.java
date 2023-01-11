package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReviewsFormat200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_author")
    public String bookAuthor;
    public GetReviewsFormat200ApplicationJsonResults withBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_title")
    public String bookTitle;
    public GetReviewsFormat200ApplicationJsonResults withBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public GetReviewsFormat200ApplicationJsonResults withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn13")
    public String[] isbn13;
    public GetReviewsFormat200ApplicationJsonResults withIsbn13(String[] isbn13) {
        this.isbn13 = isbn13;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_dt")
    public String publicationDt;
    public GetReviewsFormat200ApplicationJsonResults withPublicationDt(String publicationDt) {
        this.publicationDt = publicationDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public GetReviewsFormat200ApplicationJsonResults withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetReviewsFormat200ApplicationJsonResults withUrl(String url) {
        this.url = url;
        return this;
    }
}