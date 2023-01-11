package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams withTargetingType(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}