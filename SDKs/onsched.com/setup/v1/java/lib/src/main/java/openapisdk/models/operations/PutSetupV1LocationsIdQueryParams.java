package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1LocationsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=removeRegion")
    public Boolean removeRegion;
    public PutSetupV1LocationsIdQueryParams withRemoveRegion(Boolean removeRegion) {
        this.removeRegion = removeRegion;
        return this;
    }
}