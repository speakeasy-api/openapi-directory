package openapisdk.models.operations;



public class NewsResponse {
    public String contentType;
    public NewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public NewsResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public NewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}