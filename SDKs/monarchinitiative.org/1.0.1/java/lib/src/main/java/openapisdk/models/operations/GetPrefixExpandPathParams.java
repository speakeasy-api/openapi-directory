package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPrefixExpandPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPrefixExpandPathParams withId(String id) {
        this.id = id;
        return this;
    }
}