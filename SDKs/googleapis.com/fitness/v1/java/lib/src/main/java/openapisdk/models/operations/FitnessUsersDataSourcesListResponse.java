package openapisdk.models.operations;



public class FitnessUsersDataSourcesListResponse {
    public String contentType;
    public FitnessUsersDataSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDataSourcesResponse listDataSourcesResponse;
    public FitnessUsersDataSourcesListResponse withListDataSourcesResponse(openapisdk.models.shared.ListDataSourcesResponse listDataSourcesResponse) {
        this.listDataSourcesResponse = listDataSourcesResponse;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}