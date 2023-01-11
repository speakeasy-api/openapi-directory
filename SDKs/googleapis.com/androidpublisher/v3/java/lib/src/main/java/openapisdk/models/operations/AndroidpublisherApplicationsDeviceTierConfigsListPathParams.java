package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherApplicationsDeviceTierConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherApplicationsDeviceTierConfigsListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}