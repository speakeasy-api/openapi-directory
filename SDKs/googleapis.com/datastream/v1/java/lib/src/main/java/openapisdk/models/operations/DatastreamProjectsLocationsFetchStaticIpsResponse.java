package openapisdk.models.operations;



public class DatastreamProjectsLocationsFetchStaticIpsResponse {
    public String contentType;
    public DatastreamProjectsLocationsFetchStaticIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchStaticIpsResponse fetchStaticIpsResponse;
    public DatastreamProjectsLocationsFetchStaticIpsResponse withFetchStaticIpsResponse(openapisdk.models.shared.FetchStaticIpsResponse fetchStaticIpsResponse) {
        this.fetchStaticIpsResponse = fetchStaticIpsResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsFetchStaticIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}