package openapisdk.models.operations;



public class PremiumNewsResponse {
    public String contentType;
    public PremiumNewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public PremiumNewsResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public PremiumNewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}