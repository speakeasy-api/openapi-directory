package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAttributesComputedIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteAttributesComputedIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}