package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}