package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowSourcePathParams withId(String id) {
        this.id = id;
        return this;
    }
}