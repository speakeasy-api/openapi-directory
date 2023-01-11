package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteLikeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public DeleteQuoteLikeQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
}