package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsMeshesCreateRequest {
    public NetworkservicesProjectsLocationsMeshesCreatePathParams pathParams;
    public NetworkservicesProjectsLocationsMeshesCreateRequest withPathParams(NetworkservicesProjectsLocationsMeshesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkservicesProjectsLocationsMeshesCreateQueryParams queryParams;
    public NetworkservicesProjectsLocationsMeshesCreateRequest withQueryParams(NetworkservicesProjectsLocationsMeshesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MeshInput request;
    public NetworkservicesProjectsLocationsMeshesCreateRequest withRequest(openapisdk.models.shared.MeshInput request) {
        this.request = request;
        return this;
    }
    public NetworkservicesProjectsLocationsMeshesCreateSecurity security;
    public NetworkservicesProjectsLocationsMeshesCreateRequest withSecurity(NetworkservicesProjectsLocationsMeshesCreateSecurity security) {
        this.security = security;
        return this;
    }
}