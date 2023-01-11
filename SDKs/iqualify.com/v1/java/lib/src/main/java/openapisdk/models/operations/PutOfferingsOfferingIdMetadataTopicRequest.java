package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataTopicRequest {
    public PutOfferingsOfferingIdMetadataTopicPathParams pathParams;
    public PutOfferingsOfferingIdMetadataTopicRequest withPathParams(PutOfferingsOfferingIdMetadataTopicPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOfferingsOfferingIdMetadataTopicRequestBody request;
    public PutOfferingsOfferingIdMetadataTopicRequest withRequest(PutOfferingsOfferingIdMetadataTopicRequestBody request) {
        this.request = request;
        return this;
    }
}