package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayeeDetailsUpdateV4Request {
    public PayeeDetailsUpdateV4PathParams pathParams;
    public PayeeDetailsUpdateV4Request withPathParams(PayeeDetailsUpdateV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePayeeDetailsRequest2Input request;
    public PayeeDetailsUpdateV4Request withRequest(openapisdk.models.shared.UpdatePayeeDetailsRequest2Input request) {
        this.request = request;
        return this;
    }
}