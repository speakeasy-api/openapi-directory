package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public DisplayvideoCustomBiddingAlgorithmsGetPathParams withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
}