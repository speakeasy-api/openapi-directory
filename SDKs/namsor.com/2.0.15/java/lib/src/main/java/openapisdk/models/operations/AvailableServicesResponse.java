package openapisdk.models.operations;



public class AvailableServicesResponse {
    public openapisdk.models.shared.ApiServicesOut apiServicesOut;
    public AvailableServicesResponse withApiServicesOut(openapisdk.models.shared.ApiServicesOut apiServicesOut) {
        this.apiServicesOut = apiServicesOut;
        return this;
    }
    public String contentType;
    public AvailableServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AvailableServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}