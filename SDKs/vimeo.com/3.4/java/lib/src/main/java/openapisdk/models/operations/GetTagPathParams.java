package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetTagPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}