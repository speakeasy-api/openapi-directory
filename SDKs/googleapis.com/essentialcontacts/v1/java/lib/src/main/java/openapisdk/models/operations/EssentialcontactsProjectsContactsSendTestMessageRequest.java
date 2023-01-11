package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EssentialcontactsProjectsContactsSendTestMessageRequest {
    public EssentialcontactsProjectsContactsSendTestMessagePathParams pathParams;
    public EssentialcontactsProjectsContactsSendTestMessageRequest withPathParams(EssentialcontactsProjectsContactsSendTestMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EssentialcontactsProjectsContactsSendTestMessageQueryParams queryParams;
    public EssentialcontactsProjectsContactsSendTestMessageRequest withQueryParams(EssentialcontactsProjectsContactsSendTestMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1SendTestMessageRequest request;
    public EssentialcontactsProjectsContactsSendTestMessageRequest withRequest(openapisdk.models.shared.GoogleCloudEssentialcontactsV1SendTestMessageRequest request) {
        this.request = request;
        return this;
    }
    public EssentialcontactsProjectsContactsSendTestMessageSecurity security;
    public EssentialcontactsProjectsContactsSendTestMessageRequest withSecurity(EssentialcontactsProjectsContactsSendTestMessageSecurity security) {
        this.security = security;
        return this;
    }
}