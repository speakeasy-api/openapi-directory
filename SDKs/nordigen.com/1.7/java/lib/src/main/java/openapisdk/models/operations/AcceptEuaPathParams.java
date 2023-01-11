package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptEuaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AcceptEuaPathParams withId(String id) {
        this.id = id;
        return this;
    }
}