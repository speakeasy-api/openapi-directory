package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Long async;
    public PackageQueryParams withAsync(Long async) {
        this.async = async;
        return this;
    }
}