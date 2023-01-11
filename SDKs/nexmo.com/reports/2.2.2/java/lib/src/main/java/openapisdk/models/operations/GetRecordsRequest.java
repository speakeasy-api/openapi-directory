package openapisdk.models.operations;



public class GetRecordsRequest {
    public GetRecordsQueryParams queryParams;
    public GetRecordsRequest withQueryParams(GetRecordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRecordsSecurity security;
    public GetRecordsRequest withSecurity(GetRecordsSecurity security) {
        this.security = security;
        return this;
    }
}