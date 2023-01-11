package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQuoteDislikeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public PutQuoteDislikeQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
}