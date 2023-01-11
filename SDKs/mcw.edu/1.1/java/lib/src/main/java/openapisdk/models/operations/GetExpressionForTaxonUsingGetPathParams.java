package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExpressionForTaxonUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetExpressionForTaxonUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}