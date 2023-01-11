package openapisdk.models.operations;



public class ScoresByDateResponse {
    public String contentType;
    public ScoresByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] scores;
    public ScoresByDateResponse withScores(Object[] scores) {
        this.scores = scores;
        return this;
    }
    public Long statusCode;
    public ScoresByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}