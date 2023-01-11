package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsListResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMigrationJobsResponse listMigrationJobsResponse;
    public DatamigrationProjectsLocationsMigrationJobsListResponse withListMigrationJobsResponse(openapisdk.models.shared.ListMigrationJobsResponse listMigrationJobsResponse) {
        this.listMigrationJobsResponse = listMigrationJobsResponse;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}