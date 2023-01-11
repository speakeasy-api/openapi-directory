package openapisdk.models.operations;



public class SurveysListResponse {
    public String contentType;
    public SurveysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SurveysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Survey[] surveys;
    public SurveysListResponse withSurveys(openapisdk.models.shared.Survey[] surveys) {
        this.surveys = surveys;
        return this;
    }
}