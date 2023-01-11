package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryForLanguageStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=languageCode")
    public String languageCode;
    public PackageProjectTranslationMemoryForLanguageStatusPathParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public PackageProjectTranslationMemoryForLanguageStatusPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}