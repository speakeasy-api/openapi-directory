package openapisdk.models.operations;



public class GetTrainedModelLearningCurve1Response {
    public String contentType;
    public GetTrainedModelLearningCurve1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LearningCurveList learningCurveList;
    public GetTrainedModelLearningCurve1Response withLearningCurveList(openapisdk.models.shared.LearningCurveList learningCurveList) {
        this.learningCurveList = learningCurveList;
        return this;
    }
    public Long statusCode;
    public GetTrainedModelLearningCurve1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}