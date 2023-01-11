package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartGeneAssociationsResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object_category")
    public String objectCategory;
    public GetMartGeneAssociationsResourcePathParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxon")
    public String taxon;
    public GetMartGeneAssociationsResourcePathParams withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
}