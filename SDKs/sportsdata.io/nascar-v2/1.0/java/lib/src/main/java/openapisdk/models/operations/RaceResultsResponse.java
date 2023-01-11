package openapisdk.models.operations;



public class RaceResultsResponse {
    public String contentType;
    public RaceResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object raceResult;
    public RaceResultsResponse withRaceResult(Object raceResult) {
        this.raceResult = raceResult;
        return this;
    }
    public Long statusCode;
    public RaceResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}