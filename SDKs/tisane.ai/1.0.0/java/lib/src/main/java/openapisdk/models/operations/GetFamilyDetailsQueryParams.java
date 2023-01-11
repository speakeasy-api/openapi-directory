package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFamilyDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetFamilyDetailsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}