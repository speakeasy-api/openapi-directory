package openapisdk.models.operations;



public class FormsFormsResponsesListResponse {
    public String contentType;
    public FormsFormsResponsesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFormResponsesResponse listFormResponsesResponse;
    public FormsFormsResponsesListResponse withListFormResponsesResponse(openapisdk.models.shared.ListFormResponsesResponse listFormResponsesResponse) {
        this.listFormResponsesResponse = listFormResponsesResponse;
        return this;
    }
    public Long statusCode;
    public FormsFormsResponsesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}