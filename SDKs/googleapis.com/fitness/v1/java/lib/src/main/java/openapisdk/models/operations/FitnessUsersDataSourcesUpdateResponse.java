package openapisdk.models.operations;



public class FitnessUsersDataSourcesUpdateResponse {
    public String contentType;
    public FitnessUsersDataSourcesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSource dataSource;
    public FitnessUsersDataSourcesUpdateResponse withDataSource(openapisdk.models.shared.DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDataSourcesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}