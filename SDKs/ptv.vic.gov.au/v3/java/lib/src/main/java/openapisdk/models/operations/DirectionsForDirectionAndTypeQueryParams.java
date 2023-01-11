package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForDirectionAndTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public DirectionsForDirectionAndTypeQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public DirectionsForDirectionAndTypeQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DirectionsForDirectionAndTypeQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}