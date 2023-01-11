package openapisdk.models.operations;



public class DfareportingOperatingSystemVersionsListResponse {
    public String contentType;
    public DfareportingOperatingSystemVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperatingSystemVersionsListResponse operatingSystemVersionsListResponse;
    public DfareportingOperatingSystemVersionsListResponse withOperatingSystemVersionsListResponse(openapisdk.models.shared.OperatingSystemVersionsListResponse operatingSystemVersionsListResponse) {
        this.operatingSystemVersionsListResponse = operatingSystemVersionsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingOperatingSystemVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}