package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoTagPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public AddVideoTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}