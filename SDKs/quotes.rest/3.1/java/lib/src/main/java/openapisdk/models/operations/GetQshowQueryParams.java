package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQshowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetQshowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}