package openapisdk.models.operations;



public class PremiumNewsByPlayerResponse {
    public String contentType;
    public PremiumNewsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public PremiumNewsByPlayerResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public PremiumNewsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}