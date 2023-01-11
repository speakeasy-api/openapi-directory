package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public GetQuoteImageSearchQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetQuoteImageSearchQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=private")
    public Boolean private_;
    public GetQuoteImageSearchQueryParams withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
}