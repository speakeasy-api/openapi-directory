package openapisdk.models.operations;



public class DnsChangesGetResponse {
    public openapisdk.models.shared.Change change;
    public DnsChangesGetResponse withChange(openapisdk.models.shared.Change change) {
        this.change = change;
        return this;
    }
    public String contentType;
    public DnsChangesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DnsChangesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}