package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataLevelRequest {
    public PutOfferingsOfferingIdMetadataLevelPathParams pathParams;
    public PutOfferingsOfferingIdMetadataLevelRequest withPathParams(PutOfferingsOfferingIdMetadataLevelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOfferingsOfferingIdMetadataLevelRequestBody request;
    public PutOfferingsOfferingIdMetadataLevelRequest withRequest(PutOfferingsOfferingIdMetadataLevelRequestBody request) {
        this.request = request;
        return this;
    }
}