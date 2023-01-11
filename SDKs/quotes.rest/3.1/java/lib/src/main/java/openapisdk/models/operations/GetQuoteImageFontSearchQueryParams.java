package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteImageFontSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetQuoteImageFontSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}