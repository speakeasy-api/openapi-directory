package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTargetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTargetsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}