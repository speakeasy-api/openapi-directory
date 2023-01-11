package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customBiddingScriptId")
    public String customBiddingScriptId;
    public DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams withCustomBiddingScriptId(String customBiddingScriptId) {
        this.customBiddingScriptId = customBiddingScriptId;
        return this;
    }
}