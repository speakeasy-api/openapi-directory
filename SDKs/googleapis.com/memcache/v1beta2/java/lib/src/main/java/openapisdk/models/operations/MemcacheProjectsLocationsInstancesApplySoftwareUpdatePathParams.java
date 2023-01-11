package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
}