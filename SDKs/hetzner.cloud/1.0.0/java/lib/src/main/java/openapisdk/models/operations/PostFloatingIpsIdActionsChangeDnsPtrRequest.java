package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsChangeDnsPtrRequest {
    public PostFloatingIpsIdActionsChangeDnsPtrPathParams pathParams;
    public PostFloatingIpsIdActionsChangeDnsPtrRequest withPathParams(PostFloatingIpsIdActionsChangeDnsPtrPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest request;
    public PostFloatingIpsIdActionsChangeDnsPtrRequest withRequest(PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest request) {
        this.request = request;
        return this;
    }
}