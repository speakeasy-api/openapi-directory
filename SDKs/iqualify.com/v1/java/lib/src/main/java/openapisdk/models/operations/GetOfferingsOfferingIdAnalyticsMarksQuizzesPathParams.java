package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}