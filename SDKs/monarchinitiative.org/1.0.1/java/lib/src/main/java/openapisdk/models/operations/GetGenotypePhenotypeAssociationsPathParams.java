package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenotypePhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenotypePhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}