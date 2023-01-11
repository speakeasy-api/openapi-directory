package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksUnitsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRacksUnitsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}