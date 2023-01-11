package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantSetsArchiveCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVariantSetsArchiveCollectionQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVariantSetsArchiveCollectionQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}