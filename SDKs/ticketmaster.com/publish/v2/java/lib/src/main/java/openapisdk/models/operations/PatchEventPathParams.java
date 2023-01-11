package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchEventPathParams withId(String id) {
        this.id = id;
        return this;
    }
}