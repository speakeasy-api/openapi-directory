package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdActivitiesOpenresponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdActivitiesOpenresponsePathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}