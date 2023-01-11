package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostCustomchannelsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostCustomchannelsGetPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customChannelId")
    public String customChannelId;
    public AdsensehostCustomchannelsGetPathParams withCustomChannelId(String customChannelId) {
        this.customChannelId = customChannelId;
        return this;
    }
}