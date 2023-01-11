package openapisdk.models.operations;



public class LegacyBoxScoresResponse {
    public Object[] boxScores;
    public LegacyBoxScoresResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}