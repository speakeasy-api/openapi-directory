package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryForLanguageStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async_request_key")
    public String asyncRequestKey;
    public PackageProjectTranslationMemoryForLanguageStatusQueryParams withAsyncRequestKey(String asyncRequestKey) {
        this.asyncRequestKey = asyncRequestKey;
        return this;
    }
}