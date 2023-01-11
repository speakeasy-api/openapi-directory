package openapisdk.models.operations;



public class PostAnnotationScoreResponse {
    public String contentType;
    public PostAnnotationScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAnnotationScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SufficiencyOutput sufficiencyOutput;
    public PostAnnotationScoreResponse withSufficiencyOutput(openapisdk.models.shared.SufficiencyOutput sufficiencyOutput) {
        this.sufficiencyOutput = sufficiencyOutput;
        return this;
    }
}