package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams withTargetingType(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}