package openapisdk.models.operations;



public class DfareportingOperatingSystemVersionsGetResponse {
    public String contentType;
    public DfareportingOperatingSystemVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperatingSystemVersion operatingSystemVersion;
    public DfareportingOperatingSystemVersionsGetResponse withOperatingSystemVersion(openapisdk.models.shared.OperatingSystemVersion operatingSystemVersion) {
        this.operatingSystemVersion = operatingSystemVersion;
        return this;
    }
    public Long statusCode;
    public DfareportingOperatingSystemVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}