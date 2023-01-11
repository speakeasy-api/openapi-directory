package openapisdk.models.operations;



public class BoxScoresByDateByCompetitionResponse {
    public Object[] boxScores;
    public BoxScoresByDateByCompetitionResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public BoxScoresByDateByCompetitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoresByDateByCompetitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}