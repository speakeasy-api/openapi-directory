package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=markerEmail")
    public String markerEmail;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams withMarkerEmail(String markerEmail) {
        this.markerEmail = markerEmail;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}