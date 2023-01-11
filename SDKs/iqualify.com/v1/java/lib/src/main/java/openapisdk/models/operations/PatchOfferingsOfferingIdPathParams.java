package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PatchOfferingsOfferingIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}