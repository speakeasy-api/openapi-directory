package openapisdk.models.operations;



public class PostOfferingsOfferingIdGroupsResponse {
    public openapisdk.models.shared.AssessmentGroupResponse assessmentGroupResponse;
    public PostOfferingsOfferingIdGroupsResponse withAssessmentGroupResponse(openapisdk.models.shared.AssessmentGroupResponse assessmentGroupResponse) {
        this.assessmentGroupResponse = assessmentGroupResponse;
        return this;
    }
    public String contentType;
    public PostOfferingsOfferingIdGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsOfferingIdGroupsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostOfferingsOfferingIdGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}