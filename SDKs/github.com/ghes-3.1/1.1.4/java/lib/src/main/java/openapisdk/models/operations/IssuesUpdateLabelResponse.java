package openapisdk.models.operations;



public class IssuesUpdateLabelResponse {
    public String contentType;
    public IssuesUpdateLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IssuesUpdateLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public IssuesUpdateLabelResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
}