package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveBlockChildrenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveBlockChildrenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}