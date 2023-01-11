package openapisdk.models.operations;



public class FormsFormsGetResponse {
    public String contentType;
    public FormsFormsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Form form;
    public FormsFormsGetResponse withForm(openapisdk.models.shared.Form form) {
        this.form = form;
        return this;
    }
    public Long statusCode;
    public FormsFormsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}