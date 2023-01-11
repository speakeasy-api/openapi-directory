package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesSetLabelsRequest {
    public NotebooksProjectsLocationsInstancesSetLabelsPathParams pathParams;
    public NotebooksProjectsLocationsInstancesSetLabelsRequest withPathParams(NotebooksProjectsLocationsInstancesSetLabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetLabelsQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesSetLabelsRequest withQueryParams(NotebooksProjectsLocationsInstancesSetLabelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetInstanceLabelsRequest request;
    public NotebooksProjectsLocationsInstancesSetLabelsRequest withRequest(openapisdk.models.shared.SetInstanceLabelsRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetLabelsSecurity security;
    public NotebooksProjectsLocationsInstancesSetLabelsRequest withSecurity(NotebooksProjectsLocationsInstancesSetLabelsSecurity security) {
        this.security = security;
        return this;
    }
}