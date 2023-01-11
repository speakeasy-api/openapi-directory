package openapisdk.models.operations;



public class IpamRirsReadResponse {
    public String contentType;
    public IpamRirsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rir rir;
    public IpamRirsReadResponse withRir(openapisdk.models.shared.Rir rir) {
        this.rir = rir;
        return this;
    }
    public Long statusCode;
    public IpamRirsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}