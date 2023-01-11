package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async_request_key")
    public String asyncRequestKey;
    public PackageProjectTranslationMemoryStatusQueryParams withAsyncRequestKey(String asyncRequestKey) {
        this.asyncRequestKey = asyncRequestKey;
        return this;
    }
}