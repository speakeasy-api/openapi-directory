package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public PostQuoteQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public PostQuoteQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote")
    public String quote;
    public PostQuoteQueryParams withQuote(String quote) {
        this.quote = quote;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PostQuoteQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}