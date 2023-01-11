package openapisdk.models.operations;



public class DfareportingReportsFilesGetResponse {
    public String contentType;
    public DfareportingReportsFilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DfareportingReportsFilesGetResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsFilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}