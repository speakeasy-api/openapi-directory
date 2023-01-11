package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantsForTaxonUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetVariantsForTaxonUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}