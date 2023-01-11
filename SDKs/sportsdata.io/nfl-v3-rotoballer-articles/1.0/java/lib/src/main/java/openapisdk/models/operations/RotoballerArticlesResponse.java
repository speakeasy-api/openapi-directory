package openapisdk.models.operations;



public class RotoballerArticlesResponse {
    public Object[] articles;
    public RotoballerArticlesResponse withArticles(Object[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public RotoballerArticlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RotoballerArticlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}