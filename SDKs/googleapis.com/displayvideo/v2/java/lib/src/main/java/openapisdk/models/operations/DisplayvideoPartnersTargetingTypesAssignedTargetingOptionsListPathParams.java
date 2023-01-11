package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListPathParams withTargetingType(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}