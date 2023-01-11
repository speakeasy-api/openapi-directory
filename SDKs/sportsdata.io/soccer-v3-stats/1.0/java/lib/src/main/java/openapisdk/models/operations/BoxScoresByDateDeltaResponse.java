package openapisdk.models.operations;



public class BoxScoresByDateDeltaResponse {
    public Object[] boxScores;
    public BoxScoresByDateDeltaResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public BoxScoresByDateDeltaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoresByDateDeltaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}