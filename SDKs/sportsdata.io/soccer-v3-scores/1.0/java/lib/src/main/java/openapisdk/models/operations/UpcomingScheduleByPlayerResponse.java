package openapisdk.models.operations;



public class UpcomingScheduleByPlayerResponse {
    public String contentType;
    public UpcomingScheduleByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] games;
    public UpcomingScheduleByPlayerResponse withGames(Object[] games) {
        this.games = games;
        return this;
    }
    public Long statusCode;
    public UpcomingScheduleByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}