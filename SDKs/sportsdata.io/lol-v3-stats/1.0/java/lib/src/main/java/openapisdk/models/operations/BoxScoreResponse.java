package openapisdk.models.operations;



public class BoxScoreResponse {
    public Object[] boxScores;
    public BoxScoreResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public BoxScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}