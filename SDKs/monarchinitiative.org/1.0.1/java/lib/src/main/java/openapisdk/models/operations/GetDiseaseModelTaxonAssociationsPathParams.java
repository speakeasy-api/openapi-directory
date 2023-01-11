package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseModelTaxonAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseaseModelTaxonAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxon")
    public String taxon;
    public GetDiseaseModelTaxonAssociationsPathParams withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
}