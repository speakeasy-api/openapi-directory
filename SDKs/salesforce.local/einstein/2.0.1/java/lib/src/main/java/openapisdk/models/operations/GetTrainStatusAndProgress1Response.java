package openapisdk.models.operations;



public class GetTrainStatusAndProgress1Response {
    public String contentType;
    public GetTrainStatusAndProgress1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrainStatusAndProgress1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrainResponse trainResponse;
    public GetTrainStatusAndProgress1Response withTrainResponse(openapisdk.models.shared.TrainResponse trainResponse) {
        this.trainResponse = trainResponse;
        return this;
    }
}