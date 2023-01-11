package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherApplicationsDeviceTierConfigsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceTierConfigId")
    public String deviceTierConfigId;
    public AndroidpublisherApplicationsDeviceTierConfigsGetPathParams withDeviceTierConfigId(String deviceTierConfigId) {
        this.deviceTierConfigId = deviceTierConfigId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherApplicationsDeviceTierConfigsGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}