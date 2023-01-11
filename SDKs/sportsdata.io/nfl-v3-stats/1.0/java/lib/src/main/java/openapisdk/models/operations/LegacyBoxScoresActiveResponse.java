package openapisdk.models.operations;



public class LegacyBoxScoresActiveResponse {
    public Object[] boxScores;
    public LegacyBoxScoresActiveResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}