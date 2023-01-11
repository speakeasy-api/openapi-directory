package openapisdk.models.operations;



public class ScanResponse {
    public String contentType;
    public ScanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String slaves;
    public ScanResponse withSlaves(String slaves) {
        this.slaves = slaves;
        return this;
    }
    public String textError;
    public ScanResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}