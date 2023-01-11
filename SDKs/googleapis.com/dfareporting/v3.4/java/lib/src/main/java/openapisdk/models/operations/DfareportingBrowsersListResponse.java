package openapisdk.models.operations;



public class DfareportingBrowsersListResponse {
    public openapisdk.models.shared.BrowsersListResponse browsersListResponse;
    public DfareportingBrowsersListResponse withBrowsersListResponse(openapisdk.models.shared.BrowsersListResponse browsersListResponse) {
        this.browsersListResponse = browsersListResponse;
        return this;
    }
    public String contentType;
    public DfareportingBrowsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBrowsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}