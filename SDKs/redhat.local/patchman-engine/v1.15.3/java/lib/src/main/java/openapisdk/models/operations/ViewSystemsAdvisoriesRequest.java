package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewSystemsAdvisoriesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ControllersSystemsAdvisoriesRequest request;
    public ViewSystemsAdvisoriesRequest withRequest(openapisdk.models.shared.ControllersSystemsAdvisoriesRequest request) {
        this.request = request;
        return this;
    }
    public ViewSystemsAdvisoriesSecurity security;
    public ViewSystemsAdvisoriesRequest withSecurity(ViewSystemsAdvisoriesSecurity security) {
        this.security = security;
        return this;
    }
}