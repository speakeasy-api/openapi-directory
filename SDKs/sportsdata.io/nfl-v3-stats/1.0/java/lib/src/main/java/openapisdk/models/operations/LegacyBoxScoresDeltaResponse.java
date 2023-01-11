package openapisdk.models.operations;



public class LegacyBoxScoresDeltaResponse {
    public Object[] boxScores;
    public LegacyBoxScoresDeltaResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}