package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorLocationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorLocationsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}