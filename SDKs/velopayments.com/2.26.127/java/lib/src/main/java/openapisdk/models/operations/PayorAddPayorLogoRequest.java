package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorAddPayorLogoRequest {
    public PayorAddPayorLogoPathParams pathParams;
    public PayorAddPayorLogoRequest withPathParams(PayorAddPayorLogoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.PayorLogoRequest request;
    public PayorAddPayorLogoRequest withRequest(openapisdk.models.shared.PayorLogoRequest request) {
        this.request = request;
        return this;
    }
}