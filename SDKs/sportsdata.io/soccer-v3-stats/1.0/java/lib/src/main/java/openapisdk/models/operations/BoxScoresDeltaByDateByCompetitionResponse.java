package openapisdk.models.operations;



public class BoxScoresDeltaByDateByCompetitionResponse {
    public Object[] boxScores;
    public BoxScoresDeltaByDateByCompetitionResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public BoxScoresDeltaByDateByCompetitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoresDeltaByDateByCompetitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}