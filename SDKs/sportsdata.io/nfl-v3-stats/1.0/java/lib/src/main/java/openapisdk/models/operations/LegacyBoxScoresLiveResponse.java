package openapisdk.models.operations;



public class LegacyBoxScoresLiveResponse {
    public Object[] boxScores;
    public LegacyBoxScoresLiveResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresLiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresLiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}