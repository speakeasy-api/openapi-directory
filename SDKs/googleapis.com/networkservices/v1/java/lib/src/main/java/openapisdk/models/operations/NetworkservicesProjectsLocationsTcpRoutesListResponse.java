package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsTcpRoutesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsTcpRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTcpRoutesResponse listTcpRoutesResponse;
    public NetworkservicesProjectsLocationsTcpRoutesListResponse withListTcpRoutesResponse(openapisdk.models.shared.ListTcpRoutesResponse listTcpRoutesResponse) {
        this.listTcpRoutesResponse = listTcpRoutesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsTcpRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}