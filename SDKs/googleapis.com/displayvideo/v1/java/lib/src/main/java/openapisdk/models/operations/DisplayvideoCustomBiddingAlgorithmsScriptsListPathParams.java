package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
}