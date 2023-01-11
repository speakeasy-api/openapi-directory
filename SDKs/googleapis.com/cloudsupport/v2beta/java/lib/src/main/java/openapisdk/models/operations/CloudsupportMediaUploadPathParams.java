package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportMediaUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudsupportMediaUploadPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}