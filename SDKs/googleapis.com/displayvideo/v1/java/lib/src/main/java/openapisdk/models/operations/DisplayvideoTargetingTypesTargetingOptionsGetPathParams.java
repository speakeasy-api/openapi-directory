package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoTargetingTypesTargetingOptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingOptionId")
    public String targetingOptionId;
    public DisplayvideoTargetingTypesTargetingOptionsGetPathParams withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum targetingType;
    public DisplayvideoTargetingTypesTargetingOptionsGetPathParams withTargetingType(DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}