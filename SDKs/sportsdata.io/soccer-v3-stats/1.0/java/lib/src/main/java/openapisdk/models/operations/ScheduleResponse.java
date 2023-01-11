package openapisdk.models.operations;



public class ScheduleResponse {
    public String contentType;
    public ScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public ScheduleResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public ScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}