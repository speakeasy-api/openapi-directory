package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasestorageProjectsBucketsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasestorageProjectsBucketsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}