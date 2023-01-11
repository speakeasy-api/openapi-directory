package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdUsersMarkerEmailMarksRequest {
    public PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams pathParams;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksRequest withPathParams(PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}