package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdGroupsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}