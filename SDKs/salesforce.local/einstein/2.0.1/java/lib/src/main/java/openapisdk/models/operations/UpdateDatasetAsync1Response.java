package openapisdk.models.operations;



public class UpdateDatasetAsync1Response {
    public String contentType;
    public UpdateDatasetAsync1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UpdateDatasetAsync1Response withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UpdateDatasetAsync1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}