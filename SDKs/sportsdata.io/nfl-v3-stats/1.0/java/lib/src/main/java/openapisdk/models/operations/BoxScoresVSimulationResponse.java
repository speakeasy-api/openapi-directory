package openapisdk.models.operations;



public class BoxScoresVSimulationResponse {
    public Object[] boxScoreV3s;
    public BoxScoresVSimulationResponse withBoxScoreV3s(Object[] boxScoreV3s) {
        this.boxScoreV3s = boxScoreV3s;
        return this;
    }
    public String contentType;
    public BoxScoresVSimulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoresVSimulationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}