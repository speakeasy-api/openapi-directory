package openapisdk.models.operations;



public class DfareportingRegionsListResponse {
    public String contentType;
    public DfareportingRegionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegionsListResponse regionsListResponse;
    public DfareportingRegionsListResponse withRegionsListResponse(openapisdk.models.shared.RegionsListResponse regionsListResponse) {
        this.regionsListResponse = regionsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingRegionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}