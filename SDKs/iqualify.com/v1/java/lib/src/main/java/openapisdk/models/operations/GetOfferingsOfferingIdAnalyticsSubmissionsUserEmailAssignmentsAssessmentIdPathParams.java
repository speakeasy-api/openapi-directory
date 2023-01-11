package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}