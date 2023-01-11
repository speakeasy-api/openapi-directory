package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductEntityAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public CreateTrustProductEntityAssignmentPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}