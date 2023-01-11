package openapisdk.models.operations;



public class FormsFormsCreateResponse {
    public String contentType;
    public FormsFormsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Form form;
    public FormsFormsCreateResponse withForm(openapisdk.models.shared.Form form) {
        this.form = form;
        return this;
    }
    public Long statusCode;
    public FormsFormsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}