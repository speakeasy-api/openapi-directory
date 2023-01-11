package openapisdk.models.operations;



public class Retrain1Response {
    public String contentType;
    public Retrain1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Retrain1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrainResponse trainResponse;
    public Retrain1Response withTrainResponse(openapisdk.models.shared.TrainResponse trainResponse) {
        this.trainResponse = trainResponse;
        return this;
    }
}