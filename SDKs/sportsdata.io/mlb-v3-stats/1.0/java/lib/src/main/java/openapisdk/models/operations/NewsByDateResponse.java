package openapisdk.models.operations;



public class NewsByDateResponse {
    public String contentType;
    public NewsByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public NewsByDateResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public NewsByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}