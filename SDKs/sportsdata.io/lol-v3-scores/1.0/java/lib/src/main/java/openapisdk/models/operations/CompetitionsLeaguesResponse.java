package openapisdk.models.operations;



public class CompetitionsLeaguesResponse {
    public Object[] competitions;
    public CompetitionsLeaguesResponse withCompetitions(Object[] competitions) {
        this.competitions = competitions;
        return this;
    }
    public String contentType;
    public CompetitionsLeaguesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompetitionsLeaguesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}