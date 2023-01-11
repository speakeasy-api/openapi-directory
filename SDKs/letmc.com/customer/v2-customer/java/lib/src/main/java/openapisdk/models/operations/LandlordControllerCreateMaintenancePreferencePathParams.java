package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerCreateMaintenancePreferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerCreateMaintenancePreferencePathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}