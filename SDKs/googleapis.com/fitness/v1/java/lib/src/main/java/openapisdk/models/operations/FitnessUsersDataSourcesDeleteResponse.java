package openapisdk.models.operations;



public class FitnessUsersDataSourcesDeleteResponse {
    public String contentType;
    public FitnessUsersDataSourcesDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSource dataSource;
    public FitnessUsersDataSourcesDeleteResponse withDataSource(openapisdk.models.shared.DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}