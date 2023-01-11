package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageUserTranslationMemoryForLanguageStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async_request_key")
    public String asyncRequestKey;
    public PackageUserTranslationMemoryForLanguageStatusQueryParams withAsyncRequestKey(String asyncRequestKey) {
        this.asyncRequestKey = asyncRequestKey;
        return this;
    }
}