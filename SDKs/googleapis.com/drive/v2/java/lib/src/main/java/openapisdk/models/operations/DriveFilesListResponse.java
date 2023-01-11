package openapisdk.models.operations;



public class DriveFilesListResponse {
    public String contentType;
    public DriveFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileList fileList;
    public DriveFilesListResponse withFileList(openapisdk.models.shared.FileList fileList) {
        this.fileList = fileList;
        return this;
    }
    public Long statusCode;
    public DriveFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}