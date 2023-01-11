package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdLearnersPendingSubmissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdLearnersPendingSubmissionPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}