package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayeeDetailsUpdateV3Request {
    public PayeeDetailsUpdateV3PathParams pathParams;
    public PayeeDetailsUpdateV3Request withPathParams(PayeeDetailsUpdateV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePayeeDetailsRequestInput request;
    public PayeeDetailsUpdateV3Request withRequest(openapisdk.models.shared.UpdatePayeeDetailsRequestInput request) {
        this.request = request;
        return this;
    }
}