package openapisdk.models.operations;



public class LegacyBoxScoresDeltaCurrentWeekResponse {
    public Object[] boxScores;
    public LegacyBoxScoresDeltaCurrentWeekResponse withBoxScores(Object[] boxScores) {
        this.boxScores = boxScores;
        return this;
    }
    public String contentType;
    public LegacyBoxScoresDeltaCurrentWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LegacyBoxScoresDeltaCurrentWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}