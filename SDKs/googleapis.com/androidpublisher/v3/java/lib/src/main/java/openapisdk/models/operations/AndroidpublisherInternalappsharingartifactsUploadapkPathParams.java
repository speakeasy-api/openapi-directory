package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInternalappsharingartifactsUploadapkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInternalappsharingartifactsUploadapkPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}