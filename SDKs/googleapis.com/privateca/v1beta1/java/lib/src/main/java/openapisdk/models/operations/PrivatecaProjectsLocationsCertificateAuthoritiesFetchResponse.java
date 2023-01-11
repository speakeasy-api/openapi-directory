package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchCertificateAuthorityCsrResponse fetchCertificateAuthorityCsrResponse;
    public PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse withFetchCertificateAuthorityCsrResponse(openapisdk.models.shared.FetchCertificateAuthorityCsrResponse fetchCertificateAuthorityCsrResponse) {
        this.fetchCertificateAuthorityCsrResponse = fetchCertificateAuthorityCsrResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}