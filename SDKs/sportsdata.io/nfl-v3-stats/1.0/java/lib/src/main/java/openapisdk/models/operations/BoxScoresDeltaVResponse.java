package openapisdk.models.operations;



public class BoxScoresDeltaVResponse {
    public Object[] boxScoreV3s;
    public BoxScoresDeltaVResponse withBoxScoreV3s(Object[] boxScoreV3s) {
        this.boxScoreV3s = boxScoreV3s;
        return this;
    }
    public String contentType;
    public BoxScoresDeltaVResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BoxScoresDeltaVResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}