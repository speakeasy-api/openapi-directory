package openapisdk.models.operations;



public class StatusScanPageResponse {
    public Object apiResponse;
    public StatusScanPageResponse withApiResponse(Object apiResponse) {
        this.apiResponse = apiResponse;
        return this;
    }
    public String contentType;
    public StatusScanPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StatusScanPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}