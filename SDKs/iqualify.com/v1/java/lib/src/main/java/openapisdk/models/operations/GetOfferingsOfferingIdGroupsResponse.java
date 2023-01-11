package openapisdk.models.operations;



public class GetOfferingsOfferingIdGroupsResponse {
    public openapisdk.models.shared.AssessmentGroupResponse[] assessmentGroupResponses;
    public GetOfferingsOfferingIdGroupsResponse withAssessmentGroupResponses(openapisdk.models.shared.AssessmentGroupResponse[] assessmentGroupResponses) {
        this.assessmentGroupResponses = assessmentGroupResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdGroupsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}