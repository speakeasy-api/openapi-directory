package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionsTransactionIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostTransactionsTransactionIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
}