package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageBackgroundSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetQuoteImageBackgroundSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}