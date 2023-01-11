package openapisdk.models.operations;



public class RotoballerArticlesByDateResponse {
    public Object[] articles;
    public RotoballerArticlesByDateResponse withArticles(Object[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public RotoballerArticlesByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RotoballerArticlesByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}