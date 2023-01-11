package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRacksUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}