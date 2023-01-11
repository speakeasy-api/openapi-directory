package openapisdk.models.operations;



public class LegacyBoxScoresFinalResponse {
    public Object[] boxScores;
    public LegacyBoxScoresFinalResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresFinalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresFinalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}