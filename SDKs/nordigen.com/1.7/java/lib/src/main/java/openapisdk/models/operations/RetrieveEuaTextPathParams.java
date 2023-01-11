package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveEuaTextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveEuaTextPathParams withId(String id) {
        this.id = id;
        return this;
    }
}