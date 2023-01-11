package openapisdk.models.operations;



public class RotoballerArticlesByPlayerResponse {
    public Object[] articles;
    public RotoballerArticlesByPlayerResponse withArticles(Object[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public RotoballerArticlesByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RotoballerArticlesByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}