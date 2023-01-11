package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageUserTranslationMemoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=languageCode")
    public String languageCode;
    public PackageUserTranslationMemoryPathParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}