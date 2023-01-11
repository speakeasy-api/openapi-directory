package openapisdk.models.operations;



public class GetTrainedModels1Response {
    public String contentType;
    public GetTrainedModels1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModelList modelList;
    public GetTrainedModels1Response withModelList(openapisdk.models.shared.ModelList modelList) {
        this.modelList = modelList;
        return this;
    }
    public Long statusCode;
    public GetTrainedModels1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}