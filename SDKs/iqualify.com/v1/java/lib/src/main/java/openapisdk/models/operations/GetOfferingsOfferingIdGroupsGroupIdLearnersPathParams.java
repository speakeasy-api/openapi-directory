package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}