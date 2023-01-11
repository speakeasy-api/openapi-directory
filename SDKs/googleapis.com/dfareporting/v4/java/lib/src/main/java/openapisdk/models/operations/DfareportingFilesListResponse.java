package openapisdk.models.operations;



public class DfareportingFilesListResponse {
    public String contentType;
    public DfareportingFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileList fileList;
    public DfareportingFilesListResponse withFileList(openapisdk.models.shared.FileList fileList) {
        this.fileList = fileList;
        return this;
    }
    public Long statusCode;
    public DfareportingFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}