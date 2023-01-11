package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}