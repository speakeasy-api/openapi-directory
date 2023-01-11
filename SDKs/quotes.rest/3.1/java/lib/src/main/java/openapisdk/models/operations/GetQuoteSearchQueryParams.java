package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public GetQuoteSearchQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetQuoteSearchQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQuoteSearchQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetQuoteSearchQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlength")
    public Integer maxlength;
    public GetQuoteSearchQueryParams withMaxlength(Integer maxlength) {
        this.maxlength = maxlength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlength")
    public Integer minlength;
    public GetQuoteSearchQueryParams withMinlength(Integer minlength) {
        this.minlength = minlength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=private")
    public Boolean private_;
    public GetQuoteSearchQueryParams withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetQuoteSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sfw")
    public Boolean sfw;
    public GetQuoteSearchQueryParams withSfw(Boolean sfw) {
        this.sfw = sfw;
        return this;
    }
}