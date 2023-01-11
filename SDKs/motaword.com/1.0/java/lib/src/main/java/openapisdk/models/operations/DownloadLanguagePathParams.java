package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadLanguagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DownloadLanguagePathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public DownloadLanguagePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
}