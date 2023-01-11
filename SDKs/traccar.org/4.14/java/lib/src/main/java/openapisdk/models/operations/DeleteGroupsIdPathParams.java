package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteGroupsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}