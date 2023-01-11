package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesSetMachineTypeRequest {
    public NotebooksProjectsLocationsInstancesSetMachineTypePathParams pathParams;
    public NotebooksProjectsLocationsInstancesSetMachineTypeRequest withPathParams(NotebooksProjectsLocationsInstancesSetMachineTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetMachineTypeQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesSetMachineTypeRequest withQueryParams(NotebooksProjectsLocationsInstancesSetMachineTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetInstanceMachineTypeRequest request;
    public NotebooksProjectsLocationsInstancesSetMachineTypeRequest withRequest(openapisdk.models.shared.SetInstanceMachineTypeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetMachineTypeSecurity security;
    public NotebooksProjectsLocationsInstancesSetMachineTypeRequest withSecurity(NotebooksProjectsLocationsInstancesSetMachineTypeSecurity security) {
        this.security = security;
        return this;
    }
}