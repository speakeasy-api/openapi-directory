package openapisdk.models.operations;



public class ExtrasRecentActivityReadResponse {
    public String contentType;
    public ExtrasRecentActivityReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasRecentActivityReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserAction userAction;
    public ExtrasRecentActivityReadResponse withUserAction(openapisdk.models.shared.UserAction userAction) {
        this.userAction = userAction;
        return this;
    }
}