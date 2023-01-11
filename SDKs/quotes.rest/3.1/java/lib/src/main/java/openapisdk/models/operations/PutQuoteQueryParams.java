package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public PutQuoteQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public PutQuoteQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote")
    public String quote;
    public PutQuoteQueryParams withQuote(String quote) {
        this.quote = quote;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PutQuoteQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}