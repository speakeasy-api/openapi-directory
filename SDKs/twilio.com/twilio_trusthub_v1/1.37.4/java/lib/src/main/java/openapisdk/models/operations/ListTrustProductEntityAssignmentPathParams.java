package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductEntityAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public ListTrustProductEntityAssignmentPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}