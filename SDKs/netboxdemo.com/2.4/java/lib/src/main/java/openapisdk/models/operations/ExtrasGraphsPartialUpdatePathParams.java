package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasGraphsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}