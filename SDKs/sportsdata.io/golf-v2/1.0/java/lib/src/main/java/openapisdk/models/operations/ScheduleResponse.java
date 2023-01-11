package openapisdk.models.operations;



public class ScheduleResponse {
    public String contentType;
    public ScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] tournaments;
    public ScheduleResponse withTournaments(Object[] tournaments) {
        this.tournaments = tournaments;
        return this;
    }
}