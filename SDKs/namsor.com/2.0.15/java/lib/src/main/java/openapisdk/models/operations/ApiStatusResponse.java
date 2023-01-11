package openapisdk.models.operations;



public class ApiStatusResponse {
    public openapisdk.models.shared.ApiClassifiersStatusOut apiClassifiersStatusOut;
    public ApiStatusResponse withApiClassifiersStatusOut(openapisdk.models.shared.ApiClassifiersStatusOut apiClassifiersStatusOut) {
        this.apiClassifiersStatusOut = apiClassifiersStatusOut;
        return this;
    }
    public String contentType;
    public ApiStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}