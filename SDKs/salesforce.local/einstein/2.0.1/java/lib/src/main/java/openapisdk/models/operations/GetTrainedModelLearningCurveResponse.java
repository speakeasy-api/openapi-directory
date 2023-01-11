package openapisdk.models.operations;



public class GetTrainedModelLearningCurveResponse {
    public String contentType;
    public GetTrainedModelLearningCurveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LearningCurveList learningCurveList;
    public GetTrainedModelLearningCurveResponse withLearningCurveList(openapisdk.models.shared.LearningCurveList learningCurveList) {
        this.learningCurveList = learningCurveList;
        return this;
    }
    public Long statusCode;
    public GetTrainedModelLearningCurveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}