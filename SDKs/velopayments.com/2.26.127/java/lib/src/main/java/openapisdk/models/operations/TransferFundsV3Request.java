package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferFundsV3Request {
    public TransferFundsV3PathParams pathParams;
    public TransferFundsV3Request withPathParams(TransferFundsV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferRequest2 request;
    public TransferFundsV3Request withRequest(openapisdk.models.shared.TransferRequest2 request) {
        this.request = request;
        return this;
    }
}