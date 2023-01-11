package openapisdk.models.operations;



public class SchedulesResponse {
    public String contentType;
    public SchedulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public SchedulesResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public SchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}