package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherInternalappsharingartifactsUploadbundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherInternalappsharingartifactsUploadbundlePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}