package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPlacementGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutPlacementGroupsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}