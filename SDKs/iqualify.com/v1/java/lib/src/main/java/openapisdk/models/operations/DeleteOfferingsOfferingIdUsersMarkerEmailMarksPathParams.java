package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=markerEmail")
    public String markerEmail;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams withMarkerEmail(String markerEmail) {
        this.markerEmail = markerEmail;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}