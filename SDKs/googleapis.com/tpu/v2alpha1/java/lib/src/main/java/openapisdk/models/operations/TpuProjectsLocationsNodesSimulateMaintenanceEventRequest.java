package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesSimulateMaintenanceEventRequest {
    public TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams pathParams;
    public TpuProjectsLocationsNodesSimulateMaintenanceEventRequest withPathParams(TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams queryParams;
    public TpuProjectsLocationsNodesSimulateMaintenanceEventRequest withQueryParams(TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SimulateMaintenanceEventRequest request;
    public TpuProjectsLocationsNodesSimulateMaintenanceEventRequest withRequest(openapisdk.models.shared.SimulateMaintenanceEventRequest request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity security;
    public TpuProjectsLocationsNodesSimulateMaintenanceEventRequest withSecurity(TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity security) {
        this.security = security;
        return this;
    }
}