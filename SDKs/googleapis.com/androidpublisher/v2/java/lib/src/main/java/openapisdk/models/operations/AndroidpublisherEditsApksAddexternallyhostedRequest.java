package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsApksAddexternallyhostedRequest {
    public AndroidpublisherEditsApksAddexternallyhostedPathParams pathParams;
    public AndroidpublisherEditsApksAddexternallyhostedRequest withPathParams(AndroidpublisherEditsApksAddexternallyhostedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsApksAddexternallyhostedQueryParams queryParams;
    public AndroidpublisherEditsApksAddexternallyhostedRequest withQueryParams(AndroidpublisherEditsApksAddexternallyhostedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApksAddExternallyHostedRequest request;
    public AndroidpublisherEditsApksAddexternallyhostedRequest withRequest(openapisdk.models.shared.ApksAddExternallyHostedRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsApksAddexternallyhostedSecurity security;
    public AndroidpublisherEditsApksAddexternallyhostedRequest withSecurity(AndroidpublisherEditsApksAddexternallyhostedSecurity security) {
        this.security = security;
        return this;
    }
}