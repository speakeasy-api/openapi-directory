package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsEvaluationsCreateRequest {
    public WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams pathParams;
    public WorkloadmanagerProjectsLocationsEvaluationsCreateRequest withPathParams(WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams queryParams;
    public WorkloadmanagerProjectsLocationsEvaluationsCreateRequest withQueryParams(WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EvaluationInput request;
    public WorkloadmanagerProjectsLocationsEvaluationsCreateRequest withRequest(openapisdk.models.shared.EvaluationInput request) {
        this.request = request;
        return this;
    }
    public WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity security;
    public WorkloadmanagerProjectsLocationsEvaluationsCreateRequest withSecurity(WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}