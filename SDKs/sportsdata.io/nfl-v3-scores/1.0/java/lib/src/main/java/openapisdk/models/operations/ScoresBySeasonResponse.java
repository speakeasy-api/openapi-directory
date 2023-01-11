package openapisdk.models.operations;



public class ScoresBySeasonResponse {
    public String contentType;
    public ScoresBySeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] scores;
    public ScoresBySeasonResponse withScores(Object[] scores) {
        this.scores = scores;
        return this;
    }
    public Long statusCode;
    public ScoresBySeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}