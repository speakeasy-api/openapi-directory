package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLabelsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteLabelsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}