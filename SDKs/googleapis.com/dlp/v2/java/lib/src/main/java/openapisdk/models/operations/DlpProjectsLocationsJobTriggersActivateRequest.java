package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsJobTriggersActivateRequest {
    public DlpProjectsLocationsJobTriggersActivatePathParams pathParams;
    public DlpProjectsLocationsJobTriggersActivateRequest withPathParams(DlpProjectsLocationsJobTriggersActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsJobTriggersActivateQueryParams queryParams;
    public DlpProjectsLocationsJobTriggersActivateRequest withQueryParams(DlpProjectsLocationsJobTriggersActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DlpProjectsLocationsJobTriggersActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsJobTriggersActivateSecurity security;
    public DlpProjectsLocationsJobTriggersActivateRequest withSecurity(DlpProjectsLocationsJobTriggersActivateSecurity security) {
        this.security = security;
        return this;
    }
}