package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsAssignRequest {
    public PostFloatingIpsIdActionsAssignPathParams pathParams;
    public PostFloatingIpsIdActionsAssignRequest withPathParams(PostFloatingIpsIdActionsAssignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFloatingIpsIdActionsAssignAssignFloatingIpRequest request;
    public PostFloatingIpsIdActionsAssignRequest withRequest(PostFloatingIpsIdActionsAssignAssignFloatingIpRequest request) {
        this.request = request;
        return this;
    }
}