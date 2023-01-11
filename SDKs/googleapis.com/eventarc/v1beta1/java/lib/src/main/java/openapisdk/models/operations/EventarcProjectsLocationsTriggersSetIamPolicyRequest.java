package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsTriggersSetIamPolicyRequest {
    public EventarcProjectsLocationsTriggersSetIamPolicyPathParams pathParams;
    public EventarcProjectsLocationsTriggersSetIamPolicyRequest withPathParams(EventarcProjectsLocationsTriggersSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersSetIamPolicyQueryParams queryParams;
    public EventarcProjectsLocationsTriggersSetIamPolicyRequest withQueryParams(EventarcProjectsLocationsTriggersSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public EventarcProjectsLocationsTriggersSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsTriggersSetIamPolicySecurity security;
    public EventarcProjectsLocationsTriggersSetIamPolicyRequest withSecurity(EventarcProjectsLocationsTriggersSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}