package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEuaByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteEuaByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}