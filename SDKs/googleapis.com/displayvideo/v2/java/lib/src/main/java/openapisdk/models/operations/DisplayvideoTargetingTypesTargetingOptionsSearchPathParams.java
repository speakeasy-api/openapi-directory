package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoTargetingTypesTargetingOptionsSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum targetingType;
    public DisplayvideoTargetingTypesTargetingOptionsSearchPathParams withTargetingType(DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}