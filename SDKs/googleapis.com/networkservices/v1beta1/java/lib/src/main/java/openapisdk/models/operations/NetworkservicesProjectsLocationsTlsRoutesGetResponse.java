package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsTlsRoutesGetResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsTlsRoutesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsTlsRoutesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TlsRoute tlsRoute;
    public NetworkservicesProjectsLocationsTlsRoutesGetResponse withTlsRoute(openapisdk.models.shared.TlsRoute tlsRoute) {
        this.tlsRoute = tlsRoute;
        return this;
    }
}