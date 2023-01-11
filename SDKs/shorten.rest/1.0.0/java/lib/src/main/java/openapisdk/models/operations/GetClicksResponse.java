package openapisdk.models.operations;



public class GetClicksResponse {
    public String contentType;
    public GetClicksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetClicksModel getClicksModel;
    public GetClicksResponse withGetClicksModel(openapisdk.models.shared.GetClicksModel getClicksModel) {
        this.getClicksModel = getClicksModel;
        return this;
    }
    public Long statusCode;
    public GetClicksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}