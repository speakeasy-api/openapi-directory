package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsCreateRequest {
    public EssentialcontactsProjectsContactsCreatePathParams pathParams;
    public EssentialcontactsProjectsContactsCreateRequest withPathParams(EssentialcontactsProjectsContactsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EssentialcontactsProjectsContactsCreateQueryParams queryParams;
    public EssentialcontactsProjectsContactsCreateRequest withQueryParams(EssentialcontactsProjectsContactsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1ContactInput request;
    public EssentialcontactsProjectsContactsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudEssentialcontactsV1ContactInput request) {
        this.request = request;
        return this;
    }
    public EssentialcontactsProjectsContactsCreateSecurity security;
    public EssentialcontactsProjectsContactsCreateRequest withSecurity(EssentialcontactsProjectsContactsCreateSecurity security) {
        this.security = security;
        return this;
    }
}