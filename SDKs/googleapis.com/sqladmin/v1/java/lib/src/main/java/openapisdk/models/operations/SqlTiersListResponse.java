package openapisdk.models.operations;



public class SqlTiersListResponse {
    public String contentType;
    public SqlTiersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlTiersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TiersListResponse tiersListResponse;
    public SqlTiersListResponse withTiersListResponse(openapisdk.models.shared.TiersListResponse tiersListResponse) {
        this.tiersListResponse = tiersListResponse;
        return this;
    }
}