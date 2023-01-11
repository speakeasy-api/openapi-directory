package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomiesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonomy_id")
    public String taxonomyId;
    public TaxonomiesReadPathParams withTaxonomyId(String taxonomyId) {
        this.taxonomyId = taxonomyId;
        return this;
    }
}