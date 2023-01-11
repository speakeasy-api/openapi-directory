package openapisdk.models.operations;



public class FitnessUsersDataSourcesDatasetsPatchResponse {
    public String contentType;
    public FitnessUsersDataSourcesDatasetsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public FitnessUsersDataSourcesDatasetsPatchResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesDatasetsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}