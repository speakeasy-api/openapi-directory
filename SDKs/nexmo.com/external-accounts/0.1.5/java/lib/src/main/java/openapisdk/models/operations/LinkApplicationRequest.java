package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LinkApplicationRequest {
    public LinkApplicationPathParams pathParams;
    public LinkApplicationRequest withPathParams(LinkApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LinkApplicationRequestBody request;
    public LinkApplicationRequest withRequest(LinkApplicationRequestBody request) {
        this.request = request;
        return this;
    }
    public LinkApplicationSecurity security;
    public LinkApplicationRequest withSecurity(LinkApplicationSecurity security) {
        this.security = security;
        return this;
    }
}