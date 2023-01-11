package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseasePhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDiseasePhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}