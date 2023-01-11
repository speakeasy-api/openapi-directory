package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServerTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetServerTypesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}