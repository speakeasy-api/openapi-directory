package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest {
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsolePathParams pathParams;
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest withPathParams(BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest withQueryParams(BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity security;
    public BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest withSecurity(BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity security) {
        this.security = security;
        return this;
    }
}