package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrunksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SipTrunkDomain")
    public String sipTrunkDomain;
    public UpdateTrunksPathParams withSipTrunkDomain(String sipTrunkDomain) {
        this.sipTrunkDomain = sipTrunkDomain;
        return this;
    }
}