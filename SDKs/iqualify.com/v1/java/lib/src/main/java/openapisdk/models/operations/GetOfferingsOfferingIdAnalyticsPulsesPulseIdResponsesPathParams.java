package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pulseId")
    public String pulseId;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams withPulseId(String pulseId) {
        this.pulseId = pulseId;
        return this;
    }
}