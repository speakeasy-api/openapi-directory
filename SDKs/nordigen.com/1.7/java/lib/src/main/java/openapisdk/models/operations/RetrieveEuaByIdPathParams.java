package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveEuaByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveEuaByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}