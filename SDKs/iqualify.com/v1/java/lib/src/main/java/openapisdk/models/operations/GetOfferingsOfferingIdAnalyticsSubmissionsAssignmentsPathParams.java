package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}