package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckVideoForTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CheckVideoForTagPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public CheckVideoForTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}