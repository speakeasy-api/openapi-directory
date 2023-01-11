package openapisdk.models.operations;



public class DnsChangesCreateResponse {
    public openapisdk.models.shared.Change change;
    public DnsChangesCreateResponse withChange(openapisdk.models.shared.Change change) {
        this.change = change;
        return this;
    }
    public String contentType;
    public DnsChangesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DnsChangesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}