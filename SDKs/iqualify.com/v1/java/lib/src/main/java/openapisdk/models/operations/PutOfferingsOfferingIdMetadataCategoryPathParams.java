package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PutOfferingsOfferingIdMetadataCategoryPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}