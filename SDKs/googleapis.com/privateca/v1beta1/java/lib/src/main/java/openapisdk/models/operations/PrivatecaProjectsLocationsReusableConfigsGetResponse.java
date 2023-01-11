package openapisdk.models.operations;



public class PrivatecaProjectsLocationsReusableConfigsGetResponse {
    public String contentType;
    public PrivatecaProjectsLocationsReusableConfigsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReusableConfig reusableConfig;
    public PrivatecaProjectsLocationsReusableConfigsGetResponse withReusableConfig(openapisdk.models.shared.ReusableConfig reusableConfig) {
        this.reusableConfig = reusableConfig;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsReusableConfigsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}