package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchQuoteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public PatchQuoteQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PatchQuoteQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public PatchQuoteQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote")
    public String quote;
    public PatchQuoteQueryParams withQuote(String quote) {
        this.quote = quote;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public PatchQuoteQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}