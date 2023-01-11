package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostUrlchannelsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostUrlchannelsDeletePathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=urlChannelId")
    public String urlChannelId;
    public AdsensehostUrlchannelsDeletePathParams withUrlChannelId(String urlChannelId) {
        this.urlChannelId = urlChannelId;
        return this;
    }
}