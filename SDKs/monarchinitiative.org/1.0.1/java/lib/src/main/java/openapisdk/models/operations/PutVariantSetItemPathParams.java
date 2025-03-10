package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVariantSetItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutVariantSetItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}