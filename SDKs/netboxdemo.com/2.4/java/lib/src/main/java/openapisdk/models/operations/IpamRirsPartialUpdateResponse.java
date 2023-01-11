package openapisdk.models.operations;



public class IpamRirsPartialUpdateResponse {
    public String contentType;
    public IpamRirsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rir rir;
    public IpamRirsPartialUpdateResponse withRir(openapisdk.models.shared.Rir rir) {
        this.rir = rir;
        return this;
    }
    public Long statusCode;
    public IpamRirsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}