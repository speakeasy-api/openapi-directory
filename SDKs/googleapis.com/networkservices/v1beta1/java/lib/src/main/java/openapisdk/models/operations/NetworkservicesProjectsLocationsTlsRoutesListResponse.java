package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsTlsRoutesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsTlsRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTlsRoutesResponse listTlsRoutesResponse;
    public NetworkservicesProjectsLocationsTlsRoutesListResponse withListTlsRoutesResponse(openapisdk.models.shared.ListTlsRoutesResponse listTlsRoutesResponse) {
        this.listTlsRoutesResponse = listTlsRoutesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsTlsRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}