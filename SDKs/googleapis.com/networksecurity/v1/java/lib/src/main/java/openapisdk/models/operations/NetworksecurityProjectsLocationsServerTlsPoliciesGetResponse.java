package openapisdk.models.operations;



public class NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse {
    public String contentType;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServerTlsPolicy serverTlsPolicy;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse withServerTlsPolicy(openapisdk.models.shared.ServerTlsPolicy serverTlsPolicy) {
        this.serverTlsPolicy = serverTlsPolicy;
        return this;
    }
    public Long statusCode;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}