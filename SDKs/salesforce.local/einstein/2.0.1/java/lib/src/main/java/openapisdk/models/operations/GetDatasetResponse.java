package openapisdk.models.operations;



public class GetDatasetResponse {
    public String contentType;
    public GetDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public GetDatasetResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public GetDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}