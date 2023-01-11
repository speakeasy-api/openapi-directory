package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypeGeneByTaxonAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPhenotypeGeneByTaxonAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxid")
    public String taxid;
    public GetPhenotypeGeneByTaxonAssociationsPathParams withTaxid(String taxid) {
        this.taxid = taxid;
        return this;
    }
}