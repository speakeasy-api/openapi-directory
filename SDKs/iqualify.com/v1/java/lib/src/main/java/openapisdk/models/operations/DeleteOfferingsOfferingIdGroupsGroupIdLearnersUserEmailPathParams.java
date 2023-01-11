package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}