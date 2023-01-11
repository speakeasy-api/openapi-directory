package openapisdk.models.operations;



public class TrainResponse {
    public String contentType;
    public TrainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrainResponse trainResponse;
    public TrainResponse withTrainResponse(openapisdk.models.shared.TrainResponse trainResponse) {
        this.trainResponse = trainResponse;
        return this;
    }
}