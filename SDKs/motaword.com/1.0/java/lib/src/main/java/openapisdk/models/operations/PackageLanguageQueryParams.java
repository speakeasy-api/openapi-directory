package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageLanguageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Long async;
    public PackageLanguageQueryParams withAsync(Long async) {
        this.async = async;
        return this;
    }
}