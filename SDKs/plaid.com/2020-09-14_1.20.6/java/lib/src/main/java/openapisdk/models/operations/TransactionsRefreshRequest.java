package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransactionsRefreshRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransactionsRefreshRequest request;
    public TransactionsRefreshRequest withRequest(openapisdk.models.shared.TransactionsRefreshRequest request) {
        this.request = request;
        return this;
    }
}