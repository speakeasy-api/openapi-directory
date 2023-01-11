package openapisdk.models.operations;



public class ListDatasets1Response {
    public String contentType;
    public ListDatasets1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatasetList datasetList;
    public ListDatasets1Response withDatasetList(openapisdk.models.shared.DatasetList datasetList) {
        this.datasetList = datasetList;
        return this;
    }
    public Long statusCode;
    public ListDatasets1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}