package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PackageVersionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public PackageVersionsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}