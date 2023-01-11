package openapisdk.models.operations;



public class BooksMyconfigReleaseDownloadAccessRequest {
    public BooksMyconfigReleaseDownloadAccessQueryParams queryParams;
    public BooksMyconfigReleaseDownloadAccessRequest withQueryParams(BooksMyconfigReleaseDownloadAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMyconfigReleaseDownloadAccessSecurity security;
    public BooksMyconfigReleaseDownloadAccessRequest withSecurity(BooksMyconfigReleaseDownloadAccessSecurity security) {
        this.security = security;
        return this;
    }
}