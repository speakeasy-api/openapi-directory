package openapisdk.models.operations;



public class PremiumNewsByDateResponse {
    public String contentType;
    public PremiumNewsByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public PremiumNewsByDateResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public PremiumNewsByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}