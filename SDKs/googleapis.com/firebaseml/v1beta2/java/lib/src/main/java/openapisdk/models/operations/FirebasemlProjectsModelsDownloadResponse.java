package openapisdk.models.operations;



public class FirebasemlProjectsModelsDownloadResponse {
    public String contentType;
    public FirebasemlProjectsModelsDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DownloadModelResponse downloadModelResponse;
    public FirebasemlProjectsModelsDownloadResponse withDownloadModelResponse(openapisdk.models.shared.DownloadModelResponse downloadModelResponse) {
        this.downloadModelResponse = downloadModelResponse;
        return this;
    }
    public Long statusCode;
    public FirebasemlProjectsModelsDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}