package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoTargetingTypesTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoTargetingTypesTargetingOptionsListPathParams withTargetingType(DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}