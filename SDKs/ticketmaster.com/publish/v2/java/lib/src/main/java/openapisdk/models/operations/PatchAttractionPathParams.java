package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAttractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchAttractionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}