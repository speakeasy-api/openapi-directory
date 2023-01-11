package openapisdk.models.operations;



public class CreateAssessmentsResponse {
    public String contentType;
    public CreateAssessmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAssessmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Assessments flexV1Assessments;
    public CreateAssessmentsResponse withFlexV1Assessments(openapisdk.models.shared.FlexV1Assessments flexV1Assessments) {
        this.flexV1Assessments = flexV1Assessments;
        return this;
    }
}