package openapisdk.models.operations;



public class DetailAdvisoryResponse {
    public String contentType;
    public DetailAdvisoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DetailAdvisoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersAdvisoryDetailResponse controllersAdvisoryDetailResponse;
    public DetailAdvisoryResponse withControllersAdvisoryDetailResponse(openapisdk.models.shared.ControllersAdvisoryDetailResponse controllersAdvisoryDetailResponse) {
        this.controllersAdvisoryDetailResponse = controllersAdvisoryDetailResponse;
        return this;
    }
}