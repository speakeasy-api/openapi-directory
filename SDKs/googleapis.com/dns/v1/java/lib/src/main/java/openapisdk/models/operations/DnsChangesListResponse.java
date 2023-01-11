package openapisdk.models.operations;



public class DnsChangesListResponse {
    public openapisdk.models.shared.ChangesListResponse changesListResponse;
    public DnsChangesListResponse withChangesListResponse(openapisdk.models.shared.ChangesListResponse changesListResponse) {
        this.changesListResponse = changesListResponse;
        return this;
    }
    public String contentType;
    public DnsChangesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DnsChangesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}