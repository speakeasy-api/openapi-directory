package openapisdk.models.operations;



public class UpdateDatasetAsyncResponse {
    public String contentType;
    public UpdateDatasetAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UpdateDatasetAsyncResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UpdateDatasetAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}