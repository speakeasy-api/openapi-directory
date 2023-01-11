package openapisdk.models.operations;



public class GetOfferingsOfferingIdLearnersPendingSubmissionResponse {
    public openapisdk.models.shared.AssessmentPendingSubmission[] assessmentPendingSubmissions;
    public GetOfferingsOfferingIdLearnersPendingSubmissionResponse withAssessmentPendingSubmissions(openapisdk.models.shared.AssessmentPendingSubmission[] assessmentPendingSubmissions) {
        this.assessmentPendingSubmissions = assessmentPendingSubmissions;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdLearnersPendingSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdLearnersPendingSubmissionResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdLearnersPendingSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}