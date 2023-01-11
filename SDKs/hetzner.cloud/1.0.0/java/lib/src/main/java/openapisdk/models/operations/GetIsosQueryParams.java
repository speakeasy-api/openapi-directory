package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIsosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetIsosQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}