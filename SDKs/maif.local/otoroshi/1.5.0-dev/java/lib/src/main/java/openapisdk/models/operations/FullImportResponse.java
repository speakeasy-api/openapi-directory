package openapisdk.models.operations;



public class FullImportResponse {
    public String contentType;
    public FullImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Done done;
    public FullImportResponse withDone(openapisdk.models.shared.Done done) {
        this.done = done;
        return this;
    }
    public Long statusCode;
    public FullImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}