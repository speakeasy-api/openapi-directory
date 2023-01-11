package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}