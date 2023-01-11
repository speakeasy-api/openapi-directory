package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsMoveRequest {
    public CloudresourcemanagerProjectsMovePathParams pathParams;
    public CloudresourcemanagerProjectsMoveRequest withPathParams(CloudresourcemanagerProjectsMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsMoveQueryParams queryParams;
    public CloudresourcemanagerProjectsMoveRequest withQueryParams(CloudresourcemanagerProjectsMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveProjectRequest request;
    public CloudresourcemanagerProjectsMoveRequest withRequest(openapisdk.models.shared.MoveProjectRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsMoveSecurity security;
    public CloudresourcemanagerProjectsMoveRequest withSecurity(CloudresourcemanagerProjectsMoveSecurity security) {
        this.security = security;
        return this;
    }
}