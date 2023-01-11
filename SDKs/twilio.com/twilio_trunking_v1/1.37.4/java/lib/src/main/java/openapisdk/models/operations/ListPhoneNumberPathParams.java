package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public ListPhoneNumberPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}