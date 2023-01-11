package openapisdk.models.operations;



public class FitnessUsersDataSourcesDataPointChangesListResponse {
    public String contentType;
    public FitnessUsersDataSourcesDataPointChangesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDataPointChangesResponse listDataPointChangesResponse;
    public FitnessUsersDataSourcesDataPointChangesListResponse withListDataPointChangesResponse(openapisdk.models.shared.ListDataPointChangesResponse listDataPointChangesResponse) {
        this.listDataPointChangesResponse = listDataPointChangesResponse;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesDataPointChangesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}