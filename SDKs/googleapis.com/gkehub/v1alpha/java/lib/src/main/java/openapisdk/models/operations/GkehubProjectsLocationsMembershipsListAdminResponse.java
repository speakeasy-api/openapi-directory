package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsListAdminResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsListAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdminClusterMembershipsResponse listAdminClusterMembershipsResponse;
    public GkehubProjectsLocationsMembershipsListAdminResponse withListAdminClusterMembershipsResponse(openapisdk.models.shared.ListAdminClusterMembershipsResponse listAdminClusterMembershipsResponse) {
        this.listAdminClusterMembershipsResponse = listAdminClusterMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsListAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}