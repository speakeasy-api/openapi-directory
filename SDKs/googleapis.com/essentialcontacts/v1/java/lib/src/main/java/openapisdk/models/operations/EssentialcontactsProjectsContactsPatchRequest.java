package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsPatchRequest {
    public EssentialcontactsProjectsContactsPatchPathParams pathParams;
    public EssentialcontactsProjectsContactsPatchRequest withPathParams(EssentialcontactsProjectsContactsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EssentialcontactsProjectsContactsPatchQueryParams queryParams;
    public EssentialcontactsProjectsContactsPatchRequest withQueryParams(EssentialcontactsProjectsContactsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1ContactInput request;
    public EssentialcontactsProjectsContactsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudEssentialcontactsV1ContactInput request) {
        this.request = request;
        return this;
    }
    public EssentialcontactsProjectsContactsPatchSecurity security;
    public EssentialcontactsProjectsContactsPatchRequest withSecurity(EssentialcontactsProjectsContactsPatchSecurity security) {
        this.security = security;
        return this;
    }
}