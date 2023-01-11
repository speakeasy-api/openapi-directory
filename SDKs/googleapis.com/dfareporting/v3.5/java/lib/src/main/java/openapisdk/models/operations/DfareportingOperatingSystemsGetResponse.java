package openapisdk.models.operations;



public class DfareportingOperatingSystemsGetResponse {
    public String contentType;
    public DfareportingOperatingSystemsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperatingSystem operatingSystem;
    public DfareportingOperatingSystemsGetResponse withOperatingSystem(openapisdk.models.shared.OperatingSystem operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
    public Long statusCode;
    public DfareportingOperatingSystemsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}