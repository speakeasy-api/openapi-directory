package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datacenterConnector")
    public String datacenterConnector;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams withDatacenterConnector(String datacenterConnector) {
        this.datacenterConnector = datacenterConnector;
        return this;
    }
}