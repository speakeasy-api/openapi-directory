package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryForLanguageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Long async;
    public PackageProjectTranslationMemoryForLanguageQueryParams withAsync(Long async) {
        this.async = async;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public PackageProjectTranslationMemoryForLanguageQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
}