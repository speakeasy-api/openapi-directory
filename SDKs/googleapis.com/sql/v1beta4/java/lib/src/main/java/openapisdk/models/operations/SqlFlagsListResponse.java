package openapisdk.models.operations;



public class SqlFlagsListResponse {
    public String contentType;
    public SqlFlagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlagsListResponse flagsListResponse;
    public SqlFlagsListResponse withFlagsListResponse(openapisdk.models.shared.FlagsListResponse flagsListResponse) {
        this.flagsListResponse = flagsListResponse;
        return this;
    }
    public Long statusCode;
    public SqlFlagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}