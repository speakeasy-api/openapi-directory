package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListPathParams withTargetingType(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}