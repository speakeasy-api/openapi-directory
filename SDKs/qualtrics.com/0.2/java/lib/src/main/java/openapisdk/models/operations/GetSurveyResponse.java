package openapisdk.models.operations;



public class GetSurveyResponse {
    public String contentType;
    public GetSurveyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSurveyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> surveyResponse;
    public GetSurveyResponse withSurveyResponse(java.util.Map<String, Object> surveyResponse) {
        this.surveyResponse = surveyResponse;
        return this;
    }
}