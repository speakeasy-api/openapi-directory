package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-key")
    public String apiKey;
    public GetReviewsFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public GetReviewsFormatQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isbn")
    public Long isbn;
    public GetReviewsFormatQueryParams withIsbn(Long isbn) {
        this.isbn = isbn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetReviewsFormatQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}