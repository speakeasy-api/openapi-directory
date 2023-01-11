package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams withTargetingType(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}