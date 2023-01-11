package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public DisplayvideoCustomBiddingAlgorithmsPatchPathParams withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
}