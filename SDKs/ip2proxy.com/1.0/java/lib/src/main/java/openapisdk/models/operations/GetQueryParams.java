package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetFormatEnum format;
    public GetQueryParams withFormat(GetFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public GetQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=package")
    public String package_;
    public GetQueryParams withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
}