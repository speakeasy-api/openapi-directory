package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PackageLanguagePathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public PackageLanguagePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
}