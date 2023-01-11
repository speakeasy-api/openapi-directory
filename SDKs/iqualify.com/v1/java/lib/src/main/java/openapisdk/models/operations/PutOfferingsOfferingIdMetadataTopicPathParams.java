package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOfferingsOfferingIdMetadataTopicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PutOfferingsOfferingIdMetadataTopicPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}