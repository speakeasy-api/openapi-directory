package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataTagsRequest {
    public PutOfferingsOfferingIdMetadataTagsPathParams pathParams;
    public PutOfferingsOfferingIdMetadataTagsRequest withPathParams(PutOfferingsOfferingIdMetadataTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOfferingsOfferingIdMetadataTagsRequestBody request;
    public PutOfferingsOfferingIdMetadataTagsRequest withRequest(PutOfferingsOfferingIdMetadataTagsRequestBody request) {
        this.request = request;
        return this;
    }
}