package openapisdk.models.operations;



public class UpdateDatasetAsync2Response {
    public String contentType;
    public UpdateDatasetAsync2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UpdateDatasetAsync2Response withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UpdateDatasetAsync2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}