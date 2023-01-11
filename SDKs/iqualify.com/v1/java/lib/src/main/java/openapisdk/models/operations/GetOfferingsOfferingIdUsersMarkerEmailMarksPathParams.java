package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=markerEmail")
    public String markerEmail;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams withMarkerEmail(String markerEmail) {
        this.markerEmail = markerEmail;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}