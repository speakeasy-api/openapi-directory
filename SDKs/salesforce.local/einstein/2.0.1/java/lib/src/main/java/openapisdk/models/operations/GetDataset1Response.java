package openapisdk.models.operations;



public class GetDataset1Response {
    public String contentType;
    public GetDataset1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public GetDataset1Response withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public GetDataset1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}