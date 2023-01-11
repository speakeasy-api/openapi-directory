package openapisdk.models.operations;



public class DigitalassetlinksStatementsListResponse {
    public String contentType;
    public DigitalassetlinksStatementsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListResponse listResponse;
    public DigitalassetlinksStatementsListResponse withListResponse(openapisdk.models.shared.ListResponse listResponse) {
        this.listResponse = listResponse;
        return this;
    }
    public Long statusCode;
    public DigitalassetlinksStatementsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}