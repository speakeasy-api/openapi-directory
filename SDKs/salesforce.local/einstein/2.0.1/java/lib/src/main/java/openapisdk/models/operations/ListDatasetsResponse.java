package openapisdk.models.operations;



public class ListDatasetsResponse {
    public String contentType;
    public ListDatasetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatasetList datasetList;
    public ListDatasetsResponse withDatasetList(openapisdk.models.shared.DatasetList datasetList) {
        this.datasetList = datasetList;
        return this;
    }
    public Long statusCode;
    public ListDatasetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}