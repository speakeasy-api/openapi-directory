package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DnsPeering dnsPeering;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse withDnsPeering(openapisdk.models.shared.DnsPeering dnsPeering) {
        this.dnsPeering = dnsPeering;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}