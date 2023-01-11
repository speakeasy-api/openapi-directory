package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteDislikeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public DeleteQuoteDislikeQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
}