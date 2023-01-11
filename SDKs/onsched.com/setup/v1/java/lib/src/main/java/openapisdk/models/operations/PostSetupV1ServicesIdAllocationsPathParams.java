package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesIdAllocationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostSetupV1ServicesIdAllocationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}