package openapisdk.models.operations;



public class SecuritycenterProjectsMuteConfigsListResponse {
    public String contentType;
    public SecuritycenterProjectsMuteConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMuteConfigsResponse listMuteConfigsResponse;
    public SecuritycenterProjectsMuteConfigsListResponse withListMuteConfigsResponse(openapisdk.models.shared.ListMuteConfigsResponse listMuteConfigsResponse) {
        this.listMuteConfigsResponse = listMuteConfigsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsMuteConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}