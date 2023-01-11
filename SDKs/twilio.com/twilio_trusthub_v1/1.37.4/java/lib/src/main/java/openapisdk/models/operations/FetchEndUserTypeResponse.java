package openapisdk.models.operations;



public class FetchEndUserTypeResponse {
    public String contentType;
    public FetchEndUserTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEndUserTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1EndUserType trusthubV1EndUserType;
    public FetchEndUserTypeResponse withTrusthubV1EndUserType(openapisdk.models.shared.TrusthubV1EndUserType trusthubV1EndUserType) {
        this.trusthubV1EndUserType = trusthubV1EndUserType;
        return this;
    }
}