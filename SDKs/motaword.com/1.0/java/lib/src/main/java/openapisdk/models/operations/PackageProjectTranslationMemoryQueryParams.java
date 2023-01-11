package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Long async;
    public PackageProjectTranslationMemoryQueryParams withAsync(Long async) {
        this.async = async;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public PackageProjectTranslationMemoryQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
}