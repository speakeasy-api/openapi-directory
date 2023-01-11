package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMartParalogAssociationsResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxon1")
    public String taxon1;
    public GetMartParalogAssociationsResourcePathParams withTaxon1(String taxon1) {
        this.taxon1 = taxon1;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxon2")
    public String taxon2;
    public GetMartParalogAssociationsResourcePathParams withTaxon2(String taxon2) {
        this.taxon2 = taxon2;
        return this;
    }
}