package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsListResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMembershipsResponse listMembershipsResponse;
    public GkehubProjectsLocationsMembershipsListResponse withListMembershipsResponse(openapisdk.models.shared.ListMembershipsResponse listMembershipsResponse) {
        this.listMembershipsResponse = listMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}