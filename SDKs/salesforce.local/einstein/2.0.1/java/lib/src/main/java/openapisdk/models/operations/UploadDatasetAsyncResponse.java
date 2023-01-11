package openapisdk.models.operations;



public class UploadDatasetAsyncResponse {
    public String contentType;
    public UploadDatasetAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UploadDatasetAsyncResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UploadDatasetAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}