package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesUpgradePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatafusionProjectsLocationsInstancesUpgradePathParams withName(String name) {
        this.name = name;
        return this;
    }
}