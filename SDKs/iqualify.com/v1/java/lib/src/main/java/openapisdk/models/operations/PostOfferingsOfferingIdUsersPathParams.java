package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PostOfferingsOfferingIdUsersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}