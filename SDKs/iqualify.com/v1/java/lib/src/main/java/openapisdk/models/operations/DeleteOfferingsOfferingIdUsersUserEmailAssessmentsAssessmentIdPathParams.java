package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}