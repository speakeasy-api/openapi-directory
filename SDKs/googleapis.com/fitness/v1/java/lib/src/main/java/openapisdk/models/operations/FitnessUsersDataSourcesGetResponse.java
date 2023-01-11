package openapisdk.models.operations;



public class FitnessUsersDataSourcesGetResponse {
    public String contentType;
    public FitnessUsersDataSourcesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSource dataSource;
    public FitnessUsersDataSourcesGetResponse withDataSource(openapisdk.models.shared.DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}