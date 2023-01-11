package openapisdk.models.operations;



public class ScoresByWeekResponse {
    public String contentType;
    public ScoresByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] scores;
    public ScoresByWeekResponse withScores(Object[] scores) {
        this.scores = scores;
        return this;
    }
    public Long statusCode;
    public ScoresByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}