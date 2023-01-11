package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetMaintenanceJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetMaintenanceJobsPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}