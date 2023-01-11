package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchCaCertsResponse fetchCaCertsResponse;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse withFetchCaCertsResponse(openapisdk.models.shared.FetchCaCertsResponse fetchCaCertsResponse) {
        this.fetchCaCertsResponse = fetchCaCertsResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}