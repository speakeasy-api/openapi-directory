package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypesForTaxonUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetPhenotypesForTaxonUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}