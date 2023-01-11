package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageUserTranslationMemoryForLanguageStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=languageCode")
    public String languageCode;
    public PackageUserTranslationMemoryForLanguageStatusPathParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}