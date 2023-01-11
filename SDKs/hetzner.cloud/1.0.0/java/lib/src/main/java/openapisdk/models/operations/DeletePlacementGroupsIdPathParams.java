package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePlacementGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeletePlacementGroupsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}