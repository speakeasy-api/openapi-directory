package openapisdk.models.operations;



public class ContentProductstatusesListResponse {
    public String contentType;
    public ContentProductstatusesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductstatusesListResponse productstatusesListResponse;
    public ContentProductstatusesListResponse withProductstatusesListResponse(openapisdk.models.shared.ProductstatusesListResponse productstatusesListResponse) {
        this.productstatusesListResponse = productstatusesListResponse;
        return this;
    }
    public Long statusCode;
    public ContentProductstatusesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}