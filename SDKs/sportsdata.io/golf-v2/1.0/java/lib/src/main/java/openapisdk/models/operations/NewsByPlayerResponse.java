package openapisdk.models.operations;



public class NewsByPlayerResponse {
    public String contentType;
    public NewsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public NewsByPlayerResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public NewsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}