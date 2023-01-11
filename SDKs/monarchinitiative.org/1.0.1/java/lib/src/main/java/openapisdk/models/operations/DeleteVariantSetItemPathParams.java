package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVariantSetItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteVariantSetItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}