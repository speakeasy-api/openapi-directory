package openapisdk.models.operations;



public class RacesScheduleResponse {
    public String contentType;
    public RacesScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] races;
    public RacesScheduleResponse withRaces(Object[] races) {
        this.races = races;
        return this;
    }
    public Long statusCode;
    public RacesScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}