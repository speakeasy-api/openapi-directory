package openapisdk.models.operations;



public class YoutubereportingJobsListRequest {
    public YoutubereportingJobsListQueryParams queryParams;
    public YoutubereportingJobsListRequest withQueryParams(YoutubereportingJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubereportingJobsListSecurity security;
    public YoutubereportingJobsListRequest withSecurity(YoutubereportingJobsListSecurity security) {
        this.security = security;
        return this;
    }
}