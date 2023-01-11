package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksElevationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRacksElevationPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}