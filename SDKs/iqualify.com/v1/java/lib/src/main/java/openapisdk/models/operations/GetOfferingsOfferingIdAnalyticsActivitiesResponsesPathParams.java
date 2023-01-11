package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}