package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserEmailOfferingsOfferingIdProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetUsersUserEmailOfferingsOfferingIdProgressPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetUsersUserEmailOfferingsOfferingIdProgressPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}