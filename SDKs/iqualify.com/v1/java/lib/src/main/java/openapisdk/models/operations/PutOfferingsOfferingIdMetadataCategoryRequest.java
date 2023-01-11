package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataCategoryRequest {
    public PutOfferingsOfferingIdMetadataCategoryPathParams pathParams;
    public PutOfferingsOfferingIdMetadataCategoryRequest withPathParams(PutOfferingsOfferingIdMetadataCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOfferingsOfferingIdMetadataCategoryRequestBody request;
    public PutOfferingsOfferingIdMetadataCategoryRequest withRequest(PutOfferingsOfferingIdMetadataCategoryRequestBody request) {
        this.request = request;
        return this;
    }
}