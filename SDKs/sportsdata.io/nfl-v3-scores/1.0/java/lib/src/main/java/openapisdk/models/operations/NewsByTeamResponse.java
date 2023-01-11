package openapisdk.models.operations;



public class NewsByTeamResponse {
    public String contentType;
    public NewsByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] news;
    public NewsByTeamResponse withNews(Object[] news) {
        this.news = news;
        return this;
    }
    public Long statusCode;
    public NewsByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}