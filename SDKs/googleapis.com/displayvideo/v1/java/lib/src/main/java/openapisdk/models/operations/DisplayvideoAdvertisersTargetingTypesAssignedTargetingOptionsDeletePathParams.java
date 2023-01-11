package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeletePathParams withTargetingType(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}