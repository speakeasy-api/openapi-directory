package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesDiagnoseRequest {
    public NotebooksProjectsLocationsRuntimesDiagnosePathParams pathParams;
    public NotebooksProjectsLocationsRuntimesDiagnoseRequest withPathParams(NotebooksProjectsLocationsRuntimesDiagnosePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesDiagnoseQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesDiagnoseRequest withQueryParams(NotebooksProjectsLocationsRuntimesDiagnoseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiagnoseRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesDiagnoseRequest withRequest(openapisdk.models.shared.DiagnoseRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesDiagnoseSecurity security;
    public NotebooksProjectsLocationsRuntimesDiagnoseRequest withSecurity(NotebooksProjectsLocationsRuntimesDiagnoseSecurity security) {
        this.security = security;
        return this;
    }
}