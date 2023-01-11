package openapisdk.models.operations;



public class CrawlResponse {
    public String contentType;
    public CrawlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Crawl200ApplicationJson crawl200ApplicationJSONObject;
    public CrawlResponse withCrawl200ApplicationJsonObject(Crawl200ApplicationJson crawl200ApplicationJSONObject) {
        this.crawl200ApplicationJSONObject = crawl200ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CrawlResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public CrawlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}