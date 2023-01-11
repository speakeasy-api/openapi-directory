package openapisdk.models.operations;



public class IssuesGetLabelResponse {
    public String contentType;
    public IssuesGetLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesGetLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public IssuesGetLabelResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public IssuesGetLabelResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
}