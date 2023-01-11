package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FcmdataProjectsAndroidAppsDeliveryDataListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FcmdataProjectsAndroidAppsDeliveryDataListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}