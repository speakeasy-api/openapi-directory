package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasGraphsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}