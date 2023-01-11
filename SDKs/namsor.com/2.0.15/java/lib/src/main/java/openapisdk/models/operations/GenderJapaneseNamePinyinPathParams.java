package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderJapaneseNamePinyinPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseGivenName")
    public String japaneseGivenName;
    public GenderJapaneseNamePinyinPathParams withJapaneseGivenName(String japaneseGivenName) {
        this.japaneseGivenName = japaneseGivenName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=japaneseSurname")
    public String japaneseSurname;
    public GenderJapaneseNamePinyinPathParams withJapaneseSurname(String japaneseSurname) {
        this.japaneseSurname = japaneseSurname;
        return this;
    }
}