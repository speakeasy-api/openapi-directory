package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesMoveRequest {
    public SasportalNodesNodesMovePathParams pathParams;
    public SasportalNodesNodesMoveRequest withPathParams(SasportalNodesNodesMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SasportalNodesNodesMoveQueryParams queryParams;
    public SasportalNodesNodesMoveRequest withQueryParams(SasportalNodesNodesMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalMoveNodeRequest request;
    public SasportalNodesNodesMoveRequest withRequest(openapisdk.models.shared.SasPortalMoveNodeRequest request) {
        this.request = request;
        return this;
    }
    public SasportalNodesNodesMoveSecurity security;
    public SasportalNodesNodesMoveRequest withSecurity(SasportalNodesNodesMoveSecurity security) {
        this.security = security;
        return this;
    }
}