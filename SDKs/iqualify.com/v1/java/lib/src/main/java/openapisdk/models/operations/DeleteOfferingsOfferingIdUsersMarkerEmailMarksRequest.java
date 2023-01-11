package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest {
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams pathParams;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest withPathParams(DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}