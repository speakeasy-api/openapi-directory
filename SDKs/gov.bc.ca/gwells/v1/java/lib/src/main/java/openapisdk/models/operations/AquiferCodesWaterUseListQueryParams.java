package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquiferCodesWaterUseListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AquiferCodesWaterUseListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public AquiferCodesWaterUseListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}