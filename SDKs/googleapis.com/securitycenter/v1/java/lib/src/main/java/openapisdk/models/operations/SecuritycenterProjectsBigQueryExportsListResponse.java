package openapisdk.models.operations;



public class SecuritycenterProjectsBigQueryExportsListResponse {
    public String contentType;
    public SecuritycenterProjectsBigQueryExportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBigQueryExportsResponse listBigQueryExportsResponse;
    public SecuritycenterProjectsBigQueryExportsListResponse withListBigQueryExportsResponse(openapisdk.models.shared.ListBigQueryExportsResponse listBigQueryExportsResponse) {
        this.listBigQueryExportsResponse = listBigQueryExportsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsBigQueryExportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}