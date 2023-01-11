package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetTokenQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service")
    public String service;
    public GetTokenQueryParams withService(String service) {
        this.service = service;
        return this;
    }
}