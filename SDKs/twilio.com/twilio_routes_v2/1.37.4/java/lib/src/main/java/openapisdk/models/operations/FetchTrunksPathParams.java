package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrunksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SipTrunkDomain")
    public String sipTrunkDomain;
    public FetchTrunksPathParams withSipTrunkDomain(String sipTrunkDomain) {
        this.sipTrunkDomain = sipTrunkDomain;
        return this;
    }
}