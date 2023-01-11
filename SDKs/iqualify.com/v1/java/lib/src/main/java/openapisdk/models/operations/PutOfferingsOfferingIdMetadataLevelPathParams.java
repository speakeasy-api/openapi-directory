package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataLevelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PutOfferingsOfferingIdMetadataLevelPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}