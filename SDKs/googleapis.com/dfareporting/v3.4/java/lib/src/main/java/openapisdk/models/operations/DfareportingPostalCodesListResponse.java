package openapisdk.models.operations;



public class DfareportingPostalCodesListResponse {
    public String contentType;
    public DfareportingPostalCodesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostalCodesListResponse postalCodesListResponse;
    public DfareportingPostalCodesListResponse withPostalCodesListResponse(openapisdk.models.shared.PostalCodesListResponse postalCodesListResponse) {
        this.postalCodesListResponse = postalCodesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPostalCodesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}