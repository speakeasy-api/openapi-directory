package openapisdk.models.operations;



public class ScheduleBySeasonResponse {
    public String contentType;
    public ScheduleBySeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScheduleBySeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] tournaments;
    public ScheduleBySeasonResponse withTournaments(Object[] tournaments) {
        this.tournaments = tournaments;
        return this;
    }
}