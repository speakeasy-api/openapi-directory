package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCourseMappingsOfferingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetCourseMappingsOfferingIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}