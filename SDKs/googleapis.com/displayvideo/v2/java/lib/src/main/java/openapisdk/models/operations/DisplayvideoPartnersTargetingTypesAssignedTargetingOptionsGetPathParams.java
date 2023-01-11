package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetPathParams withTargetingType(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}