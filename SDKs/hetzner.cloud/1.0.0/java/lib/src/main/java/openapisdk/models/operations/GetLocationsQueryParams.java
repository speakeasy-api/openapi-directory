package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetLocationsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}