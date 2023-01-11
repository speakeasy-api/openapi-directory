package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageSuggestionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetImageSuggestionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetImageSuggestionsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}