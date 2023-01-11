package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PutOfferingsOfferingIdMetadataTagsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}