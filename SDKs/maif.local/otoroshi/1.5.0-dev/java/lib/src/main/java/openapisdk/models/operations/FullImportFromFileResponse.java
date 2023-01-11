package openapisdk.models.operations;



public class FullImportFromFileResponse {
    public String contentType;
    public FullImportFromFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Done done;
    public FullImportFromFileResponse withDone(openapisdk.models.shared.Done done) {
        this.done = done;
        return this;
    }
    public Long statusCode;
    public FullImportFromFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}