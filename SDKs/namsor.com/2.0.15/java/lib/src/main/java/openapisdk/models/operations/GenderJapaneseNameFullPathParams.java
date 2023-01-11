package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderJapaneseNameFullPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseName")
    public String japaneseName;
    public GenderJapaneseNameFullPathParams withJapaneseName(String japaneseName) {
        this.japaneseName = japaneseName;
        return this;
    }
}