package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferFundsRequest {
    public TransferFundsPathParams pathParams;
    public TransferFundsRequest withPathParams(TransferFundsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferRequest request;
    public TransferFundsRequest withRequest(openapisdk.models.shared.TransferRequest request) {
        this.request = request;
        return this;
    }
}