package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteAuthorsSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=detailed")
    public Boolean detailed;
    public GetQuoteAuthorsSearchQueryParams withDetailed(Boolean detailed) {
        this.detailed = detailed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetQuoteAuthorsSearchQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetQuoteAuthorsSearchQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetQuoteAuthorsSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQuoteAuthorsSearchQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}