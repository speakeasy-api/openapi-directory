package openapisdk.models.operations;



public class UploadDatasetAsync1Response {
    public String contentType;
    public UploadDatasetAsync1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UploadDatasetAsync1Response withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UploadDatasetAsync1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}