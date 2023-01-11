package openapisdk.models.operations;



public class UploadDatasetSyncResponse {
    public String contentType;
    public UploadDatasetSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UploadDatasetSyncResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UploadDatasetSyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}