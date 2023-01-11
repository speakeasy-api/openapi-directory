package openapisdk.models.operations;



public class YoutubereportingMediaDownloadRequest {
    public YoutubereportingMediaDownloadPathParams pathParams;
    public YoutubereportingMediaDownloadRequest withPathParams(YoutubereportingMediaDownloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public YoutubereportingMediaDownloadQueryParams queryParams;
    public YoutubereportingMediaDownloadRequest withQueryParams(YoutubereportingMediaDownloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubereportingMediaDownloadSecurity security;
    public YoutubereportingMediaDownloadRequest withSecurity(YoutubereportingMediaDownloadSecurity security) {
        this.security = security;
        return this;
    }
}