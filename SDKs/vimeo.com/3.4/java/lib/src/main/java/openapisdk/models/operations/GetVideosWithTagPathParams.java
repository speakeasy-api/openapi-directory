package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideosWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetVideosWithTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}