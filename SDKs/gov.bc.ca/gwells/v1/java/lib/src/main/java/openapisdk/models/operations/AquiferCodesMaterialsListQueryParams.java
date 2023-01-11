package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquiferCodesMaterialsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AquiferCodesMaterialsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public AquiferCodesMaterialsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}