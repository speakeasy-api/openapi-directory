package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}