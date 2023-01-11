package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasestorageProjectsBucketsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasestorageProjectsBucketsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}