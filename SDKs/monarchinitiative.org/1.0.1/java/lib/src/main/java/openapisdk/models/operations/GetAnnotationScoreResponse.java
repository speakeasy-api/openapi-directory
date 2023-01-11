package openapisdk.models.operations;



public class GetAnnotationScoreResponse {
    public String contentType;
    public GetAnnotationScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnnotationScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SufficiencyOutput sufficiencyOutput;
    public GetAnnotationScoreResponse withSufficiencyOutput(openapisdk.models.shared.SufficiencyOutput sufficiencyOutput) {
        this.sufficiencyOutput = sufficiencyOutput;
        return this;
    }
}