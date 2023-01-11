package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLabelsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchLabelsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}