package openapisdk.models.operations;



public class UploadDatasetSync1Response {
    public String contentType;
    public UploadDatasetSync1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public UploadDatasetSync1Response withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public UploadDatasetSync1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}