package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DirectionsForRouteQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DirectionsForRouteQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DirectionsForRouteQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}