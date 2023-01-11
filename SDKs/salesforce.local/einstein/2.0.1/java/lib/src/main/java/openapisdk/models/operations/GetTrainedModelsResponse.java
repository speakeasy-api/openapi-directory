package openapisdk.models.operations;



public class GetTrainedModelsResponse {
    public String contentType;
    public GetTrainedModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModelList modelList;
    public GetTrainedModelsResponse withModelList(openapisdk.models.shared.ModelList modelList) {
        this.modelList = modelList;
        return this;
    }
    public Long statusCode;
    public GetTrainedModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}