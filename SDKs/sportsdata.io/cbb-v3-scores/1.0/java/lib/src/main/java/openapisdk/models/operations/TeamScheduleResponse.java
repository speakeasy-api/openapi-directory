package openapisdk.models.operations;



public class TeamScheduleResponse {
    public String contentType;
    public TeamScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public TeamScheduleResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public TeamScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}