package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesForLatestAssemblyUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxonId")
    public String taxonId;
    public GetGenesForLatestAssemblyUsingGetPathParams withTaxonId(String taxonId) {
        this.taxonId = taxonId;
        return this;
    }
}