package openapisdk.models.operations;



public class FitnessUsersDataSourcesDatasetsGetResponse {
    public String contentType;
    public FitnessUsersDataSourcesDatasetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Dataset dataset;
    public FitnessUsersDataSourcesDatasetsGetResponse withDataset(openapisdk.models.shared.Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesDatasetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}