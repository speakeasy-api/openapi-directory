package openapisdk.models.operations;



public class DfareportingMetrosListResponse {
    public String contentType;
    public DfareportingMetrosListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MetrosListResponse metrosListResponse;
    public DfareportingMetrosListResponse withMetrosListResponse(openapisdk.models.shared.MetrosListResponse metrosListResponse) {
        this.metrosListResponse = metrosListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingMetrosListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}