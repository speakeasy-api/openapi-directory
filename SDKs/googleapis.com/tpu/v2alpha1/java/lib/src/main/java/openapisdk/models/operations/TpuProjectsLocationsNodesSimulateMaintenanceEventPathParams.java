package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams withName(String name) {
        this.name = name;
        return this;
    }
}