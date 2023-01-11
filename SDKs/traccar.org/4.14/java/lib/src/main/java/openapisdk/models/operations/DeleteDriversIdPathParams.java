package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDriversIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteDriversIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}