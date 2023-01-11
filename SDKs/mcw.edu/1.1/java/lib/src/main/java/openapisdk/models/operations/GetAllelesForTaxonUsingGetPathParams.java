package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllelesForTaxonUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetAllelesForTaxonUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}