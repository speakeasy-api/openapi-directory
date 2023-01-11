package openapisdk.models.operations;



public class RetrieveAllSupportedAspspSInAGivenCountryResponse {
    public openapisdk.models.shared.Aspsp[] aspsps;
    public RetrieveAllSupportedAspspSInAGivenCountryResponse withAspsps(openapisdk.models.shared.Aspsp[] aspsps) {
        this.aspsps = aspsps;
        return this;
    }
    public String contentType;
    public RetrieveAllSupportedAspspSInAGivenCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveAllSupportedAspspSInAGivenCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}