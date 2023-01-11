package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppendBlockChildrenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AppendBlockChildrenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}