package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}