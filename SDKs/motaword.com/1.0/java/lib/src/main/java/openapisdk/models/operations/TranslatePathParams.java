package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TranslatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetLanguage")
    public String targetLanguage;
    public TranslatePathParams withTargetLanguage(String targetLanguage) {
        this.targetLanguage = targetLanguage;
        return this;
    }
}