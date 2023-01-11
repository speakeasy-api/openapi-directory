package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteLikeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public PostQuoteLikeQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
}