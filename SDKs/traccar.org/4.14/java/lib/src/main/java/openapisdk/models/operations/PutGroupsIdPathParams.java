package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutGroupsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}