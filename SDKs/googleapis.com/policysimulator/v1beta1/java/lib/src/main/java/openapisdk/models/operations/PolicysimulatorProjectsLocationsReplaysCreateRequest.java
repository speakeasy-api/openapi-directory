package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolicysimulatorProjectsLocationsReplaysCreateRequest {
    public PolicysimulatorProjectsLocationsReplaysCreatePathParams pathParams;
    public PolicysimulatorProjectsLocationsReplaysCreateRequest withPathParams(PolicysimulatorProjectsLocationsReplaysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PolicysimulatorProjectsLocationsReplaysCreateQueryParams queryParams;
    public PolicysimulatorProjectsLocationsReplaysCreateRequest withQueryParams(PolicysimulatorProjectsLocationsReplaysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPolicysimulatorV1beta1ReplayInput request;
    public PolicysimulatorProjectsLocationsReplaysCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPolicysimulatorV1beta1ReplayInput request) {
        this.request = request;
        return this;
    }
    public PolicysimulatorProjectsLocationsReplaysCreateSecurity security;
    public PolicysimulatorProjectsLocationsReplaysCreateRequest withSecurity(PolicysimulatorProjectsLocationsReplaysCreateSecurity security) {
        this.security = security;
        return this;
    }
}