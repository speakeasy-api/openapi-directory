package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdUsersUserEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdUsersUserEmailPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public DeleteOfferingsOfferingIdUsersUserEmailPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}