package openapisdk.models.operations;



public class FormsFormsResponsesGetResponse {
    public String contentType;
    public FormsFormsResponsesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormResponse formResponse;
    public FormsFormsResponsesGetResponse withFormResponse(openapisdk.models.shared.FormResponse formResponse) {
        this.formResponse = formResponse;
        return this;
    }
    public Long statusCode;
    public FormsFormsResponsesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}