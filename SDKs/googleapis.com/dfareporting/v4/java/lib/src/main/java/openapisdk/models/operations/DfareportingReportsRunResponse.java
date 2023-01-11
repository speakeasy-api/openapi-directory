package openapisdk.models.operations;



public class DfareportingReportsRunResponse {
    public String contentType;
    public DfareportingReportsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DfareportingReportsRunResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}