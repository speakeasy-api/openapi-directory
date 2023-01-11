package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCasePhenotypeAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCasePhenotypeAssociationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}