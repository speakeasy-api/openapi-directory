package openapisdk.models.operations;



public class RetrainResponse {
    public String contentType;
    public RetrainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrainResponse trainResponse;
    public RetrainResponse withTrainResponse(openapisdk.models.shared.TrainResponse trainResponse) {
        this.trainResponse = trainResponse;
        return this;
    }
}