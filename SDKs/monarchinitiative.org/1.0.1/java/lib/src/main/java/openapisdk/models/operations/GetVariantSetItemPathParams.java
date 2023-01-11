package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantSetItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantSetItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}