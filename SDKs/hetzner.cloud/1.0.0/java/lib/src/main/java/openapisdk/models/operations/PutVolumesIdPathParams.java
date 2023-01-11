package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVolumesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutVolumesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}