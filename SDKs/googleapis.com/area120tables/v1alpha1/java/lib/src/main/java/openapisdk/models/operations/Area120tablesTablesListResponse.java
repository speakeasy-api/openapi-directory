package openapisdk.models.operations;



public class Area120tablesTablesListResponse {
    public String contentType;
    public Area120tablesTablesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTablesResponse listTablesResponse;
    public Area120tablesTablesListResponse withListTablesResponse(openapisdk.models.shared.ListTablesResponse listTablesResponse) {
        this.listTablesResponse = listTablesResponse;
        return this;
    }
    public Long statusCode;
    public Area120tablesTablesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}