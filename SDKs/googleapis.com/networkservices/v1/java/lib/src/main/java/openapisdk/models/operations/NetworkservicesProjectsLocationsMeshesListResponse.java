package openapisdk.models.operations;



public class NetworkservicesProjectsLocationsMeshesListResponse {
    public String contentType;
    public NetworkservicesProjectsLocationsMeshesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMeshesResponse listMeshesResponse;
    public NetworkservicesProjectsLocationsMeshesListResponse withListMeshesResponse(openapisdk.models.shared.ListMeshesResponse listMeshesResponse) {
        this.listMeshesResponse = listMeshesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkservicesProjectsLocationsMeshesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}