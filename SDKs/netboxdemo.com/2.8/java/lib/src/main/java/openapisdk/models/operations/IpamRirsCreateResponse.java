package openapisdk.models.operations;



public class IpamRirsCreateResponse {
    public String contentType;
    public IpamRirsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rir rir;
    public IpamRirsCreateResponse withRir(openapisdk.models.shared.Rir rir) {
        this.rir = rir;
        return this;
    }
    public Long statusCode;
    public IpamRirsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}