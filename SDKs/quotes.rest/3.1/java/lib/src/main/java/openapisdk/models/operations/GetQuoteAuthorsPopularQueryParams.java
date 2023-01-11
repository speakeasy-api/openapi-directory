package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteAuthorsPopularQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailed")
    public Boolean detailed;
    public GetQuoteAuthorsPopularQueryParams withDetailed(Boolean detailed) {
        this.detailed = detailed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQuoteAuthorsPopularQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetQuoteAuthorsPopularQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQuoteAuthorsPopularQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}