package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnatomyGeneByTaxonAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAnatomyGeneByTaxonAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxid")
    public String taxid;
    public GetAnatomyGeneByTaxonAssociationsPathParams withTaxid(String taxid) {
        this.taxid = taxid;
        return this;
    }
}