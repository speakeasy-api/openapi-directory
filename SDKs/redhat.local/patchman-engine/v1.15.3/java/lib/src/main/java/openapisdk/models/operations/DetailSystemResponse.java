package openapisdk.models.operations;



public class DetailSystemResponse {
    public String contentType;
    public DetailSystemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DetailSystemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemDetailResponse controllersSystemDetailResponse;
    public DetailSystemResponse withControllersSystemDetailResponse(openapisdk.models.shared.ControllersSystemDetailResponse controllersSystemDetailResponse) {
        this.controllersSystemDetailResponse = controllersSystemDetailResponse;
        return this;
    }
}