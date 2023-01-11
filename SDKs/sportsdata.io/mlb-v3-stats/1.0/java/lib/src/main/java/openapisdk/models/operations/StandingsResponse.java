package openapisdk.models.operations;



public class StandingsResponse {
    public String contentType;
    public StandingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] standings;
    public StandingsResponse withStandings(Object[] standings) {
        this.standings = standings;
        return this;
    }
    public Long statusCode;
    public StandingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}