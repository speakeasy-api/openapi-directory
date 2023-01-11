package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetProfileQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service")
    public String service;
    public GetProfileQueryParams withService(String service) {
        this.service = service;
        return this;
    }
}