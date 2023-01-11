package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteDislikeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public PostQuoteDislikeQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
}