package openapisdk.models.operations;



public class FitnessUsersDataSourcesCreateResponse {
    public String contentType;
    public FitnessUsersDataSourcesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSource dataSource;
    public FitnessUsersDataSourcesCreateResponse withDataSource(openapisdk.models.shared.DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}