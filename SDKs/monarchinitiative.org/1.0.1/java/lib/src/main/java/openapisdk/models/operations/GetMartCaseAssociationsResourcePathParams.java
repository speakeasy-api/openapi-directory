package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartCaseAssociationsResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object_category")
    public String objectCategory;
    public GetMartCaseAssociationsResourcePathParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxon")
    public String taxon;
    public GetMartCaseAssociationsResourcePathParams withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
}