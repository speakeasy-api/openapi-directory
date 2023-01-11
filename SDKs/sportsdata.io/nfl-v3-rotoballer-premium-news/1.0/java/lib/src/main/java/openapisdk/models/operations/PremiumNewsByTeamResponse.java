package openapisdk.models.operations;



public class PremiumNewsByTeamResponse {
    public String contentType;
    public PremiumNewsByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public PremiumNewsByTeamResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public PremiumNewsByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}