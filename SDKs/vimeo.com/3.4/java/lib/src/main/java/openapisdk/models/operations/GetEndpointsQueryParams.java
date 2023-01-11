package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=openapi")
    public Boolean openapi;
    public GetEndpointsQueryParams withOpenapi(Boolean openapi) {
        this.openapi = openapi;
        return this;
    }
}