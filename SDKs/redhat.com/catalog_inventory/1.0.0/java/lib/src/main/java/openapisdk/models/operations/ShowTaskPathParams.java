package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowTaskPathParams withId(String id) {
        this.id = id;
        return this;
    }
}