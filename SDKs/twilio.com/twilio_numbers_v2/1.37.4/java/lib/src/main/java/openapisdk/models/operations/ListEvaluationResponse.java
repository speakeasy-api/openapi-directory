package openapisdk.models.operations;



public class ListEvaluationResponse {
    public String contentType;
    public ListEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEvaluationListEvaluationResponse listEvaluationResponse;
    public ListEvaluationResponse withListEvaluationResponse(ListEvaluationListEvaluationResponse listEvaluationResponse) {
        this.listEvaluationResponse = listEvaluationResponse;
        return this;
    }
    public Long statusCode;
    public ListEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}