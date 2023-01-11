package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomyCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destId")
    public Long destId;
    public TaxonomyCategoriesQueryParams withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
}