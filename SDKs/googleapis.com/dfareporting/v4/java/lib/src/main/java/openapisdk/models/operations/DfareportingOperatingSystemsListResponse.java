package openapisdk.models.operations;



public class DfareportingOperatingSystemsListResponse {
    public String contentType;
    public DfareportingOperatingSystemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperatingSystemsListResponse operatingSystemsListResponse;
    public DfareportingOperatingSystemsListResponse withOperatingSystemsListResponse(openapisdk.models.shared.OperatingSystemsListResponse operatingSystemsListResponse) {
        this.operatingSystemsListResponse = operatingSystemsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingOperatingSystemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}