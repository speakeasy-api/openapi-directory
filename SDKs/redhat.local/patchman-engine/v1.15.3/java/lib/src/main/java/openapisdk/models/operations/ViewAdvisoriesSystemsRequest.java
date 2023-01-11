package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewAdvisoriesSystemsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ControllersSystemsAdvisoriesRequest request;
    public ViewAdvisoriesSystemsRequest withRequest(openapisdk.models.shared.ControllersSystemsAdvisoriesRequest request) {
        this.request = request;
        return this;
    }
    public ViewAdvisoriesSystemsSecurity security;
    public ViewAdvisoriesSystemsRequest withSecurity(ViewAdvisoriesSystemsSecurity security) {
        this.security = security;
        return this;
    }
}