package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForDirectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DirectionsForDirectionQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DirectionsForDirectionQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DirectionsForDirectionQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}