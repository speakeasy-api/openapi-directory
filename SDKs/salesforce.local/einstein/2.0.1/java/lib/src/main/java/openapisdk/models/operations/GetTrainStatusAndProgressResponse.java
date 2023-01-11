package openapisdk.models.operations;



public class GetTrainStatusAndProgressResponse {
    public String contentType;
    public GetTrainStatusAndProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrainStatusAndProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrainResponse trainResponse;
    public GetTrainStatusAndProgressResponse withTrainResponse(openapisdk.models.shared.TrainResponse trainResponse) {
        this.trainResponse = trainResponse;
        return this;
    }
}