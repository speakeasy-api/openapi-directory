package openapisdk.models.operations;



public class CloudsupportCasesListResponse {
    public String contentType;
    public CloudsupportCasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCasesResponse listCasesResponse;
    public CloudsupportCasesListResponse withListCasesResponse(openapisdk.models.shared.ListCasesResponse listCasesResponse) {
        this.listCasesResponse = listCasesResponse;
        return this;
    }
    public Long statusCode;
    public CloudsupportCasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}