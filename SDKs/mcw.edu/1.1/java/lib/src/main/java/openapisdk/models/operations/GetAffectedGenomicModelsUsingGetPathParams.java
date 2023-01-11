package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAffectedGenomicModelsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetAffectedGenomicModelsUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}