package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsRecentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectType")
    public GetDeviceCameraAnalyticsRecentObjectTypeEnum objectType;
    public GetDeviceCameraAnalyticsRecentQueryParams withObjectType(GetDeviceCameraAnalyticsRecentObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}