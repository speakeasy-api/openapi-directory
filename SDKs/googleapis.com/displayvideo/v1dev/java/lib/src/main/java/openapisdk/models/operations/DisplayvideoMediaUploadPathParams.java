package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoMediaUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public DisplayvideoMediaUploadPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}