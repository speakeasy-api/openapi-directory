package openapisdk.models.operations;



public class ScoresByWeekSimulationResponse {
    public String contentType;
    public ScoresByWeekSimulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] scores;
    public ScoresByWeekSimulationResponse withScores(Object[] scores) {
        this.scores = scores;
        return this;
    }
    public Long statusCode;
    public ScoresByWeekSimulationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}