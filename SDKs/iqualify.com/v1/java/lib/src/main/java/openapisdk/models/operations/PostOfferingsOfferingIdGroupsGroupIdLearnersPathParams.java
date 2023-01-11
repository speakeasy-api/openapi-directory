package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}