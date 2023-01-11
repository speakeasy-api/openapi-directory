package openapisdk.models.operations;



public class TpuProjectsLocationsRuntimeVersionsGetResponse {
    public String contentType;
    public TpuProjectsLocationsRuntimeVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RuntimeVersion runtimeVersion;
    public TpuProjectsLocationsRuntimeVersionsGetResponse withRuntimeVersion(openapisdk.models.shared.RuntimeVersion runtimeVersion) {
        this.runtimeVersion = runtimeVersion;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsRuntimeVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}