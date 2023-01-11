package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatacentersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetDatacentersQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}