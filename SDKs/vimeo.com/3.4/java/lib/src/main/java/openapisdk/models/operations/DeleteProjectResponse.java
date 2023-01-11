package openapisdk.models.operations;



public class DeleteProjectResponse {
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}