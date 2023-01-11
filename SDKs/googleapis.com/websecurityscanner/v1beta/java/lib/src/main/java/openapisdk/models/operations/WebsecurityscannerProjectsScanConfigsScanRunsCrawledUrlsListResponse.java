package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse {
    public String contentType;
    public WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCrawledUrlsResponse listCrawledUrlsResponse;
    public WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse withListCrawledUrlsResponse(openapisdk.models.shared.ListCrawledUrlsResponse listCrawledUrlsResponse) {
        this.listCrawledUrlsResponse = listCrawledUrlsResponse;
        return this;
    }
    public Long statusCode;
    public WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}