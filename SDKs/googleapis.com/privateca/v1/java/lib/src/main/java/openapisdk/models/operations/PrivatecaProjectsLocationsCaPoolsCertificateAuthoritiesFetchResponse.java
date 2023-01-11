package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchCertificateAuthorityCsrResponse fetchCertificateAuthorityCsrResponse;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse withFetchCertificateAuthorityCsrResponse(openapisdk.models.shared.FetchCertificateAuthorityCsrResponse fetchCertificateAuthorityCsrResponse) {
        this.fetchCertificateAuthorityCsrResponse = fetchCertificateAuthorityCsrResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}