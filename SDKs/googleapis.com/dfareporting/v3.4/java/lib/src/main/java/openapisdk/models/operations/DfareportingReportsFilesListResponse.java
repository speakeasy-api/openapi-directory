package openapisdk.models.operations;



public class DfareportingReportsFilesListResponse {
    public String contentType;
    public DfareportingReportsFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileList fileList;
    public DfareportingReportsFilesListResponse withFileList(openapisdk.models.shared.FileList fileList) {
        this.fileList = fileList;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}