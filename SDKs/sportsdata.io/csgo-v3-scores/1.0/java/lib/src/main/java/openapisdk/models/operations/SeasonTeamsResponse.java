package openapisdk.models.operations;



public class SeasonTeamsResponse {
    public String contentType;
    public SeasonTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] seasonTeams;
    public SeasonTeamsResponse withSeasonTeams(Object[] seasonTeams) {
        this.seasonTeams = seasonTeams;
        return this;
    }
    public Long statusCode;
    public SeasonTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}