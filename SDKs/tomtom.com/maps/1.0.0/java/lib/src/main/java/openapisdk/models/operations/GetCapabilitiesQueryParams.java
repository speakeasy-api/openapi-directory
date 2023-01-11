package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCapabilitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request")
    public GetCapabilitiesRequestEnum request;
    public GetCapabilitiesQueryParams withRequest(GetCapabilitiesRequestEnum request) {
        this.request = request;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service")
    public GetCapabilitiesServiceEnum service;
    public GetCapabilitiesQueryParams withService(GetCapabilitiesServiceEnum service) {
        this.service = service;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public GetCapabilitiesVersionEnum version;
    public GetCapabilitiesQueryParams withVersion(GetCapabilitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}