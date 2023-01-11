package openapisdk.models.operations;



public class PlayByPlaySimulationResponse {
    public String contentType;
    public PlayByPlaySimulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playByPlays;
    public PlayByPlaySimulationResponse withPlayByPlays(Object[] playByPlays) {
        this.playByPlays = playByPlays;
        return this;
    }
    public Long statusCode;
    public PlayByPlaySimulationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}