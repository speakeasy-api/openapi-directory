package openapisdk.models.operations;



public class IpamRirsUpdateResponse {
    public String contentType;
    public IpamRirsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rir rir;
    public IpamRirsUpdateResponse withRir(openapisdk.models.shared.Rir rir) {
        this.rir = rir;
        return this;
    }
    public Long statusCode;
    public IpamRirsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}