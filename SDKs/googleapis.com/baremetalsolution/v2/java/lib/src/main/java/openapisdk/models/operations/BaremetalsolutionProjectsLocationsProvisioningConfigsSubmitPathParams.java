package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}