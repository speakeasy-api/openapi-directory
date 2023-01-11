package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseJapaneseNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseName")
    public String japaneseName;
    public ParseJapaneseNamePathParams withJapaneseName(String japaneseName) {
        this.japaneseName = japaneseName;
        return this;
    }
}