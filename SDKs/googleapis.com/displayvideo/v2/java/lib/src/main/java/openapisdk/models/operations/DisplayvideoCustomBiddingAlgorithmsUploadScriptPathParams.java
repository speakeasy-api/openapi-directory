package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsUploadScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public DisplayvideoCustomBiddingAlgorithmsUploadScriptPathParams withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
}