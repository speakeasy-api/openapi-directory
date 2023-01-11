package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransactionsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransactionsGetRequest request;
    public TransactionsGetRequest withRequest(openapisdk.models.shared.TransactionsGetRequest request) {
        this.request = request;
        return this;
    }
}