package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdRequest {
    public PatchOfferingsOfferingIdPathParams pathParams;
    public PatchOfferingsOfferingIdRequest withPathParams(PatchOfferingsOfferingIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Offering request;
    public PatchOfferingsOfferingIdRequest withRequest(openapisdk.models.shared.Offering request) {
        this.request = request;
        return this;
    }
}