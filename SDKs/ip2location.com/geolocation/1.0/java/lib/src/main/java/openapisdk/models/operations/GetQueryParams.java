package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=addon")
    public GetAddonEnum[] addon;
    public GetQueryParams withAddon(GetAddonEnum[] addon) {
        this.addon = addon;
        return this;
    }
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
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public GetLangEnum lang;
    public GetQueryParams withLang(GetLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=package")
    public GetPackageEnum package_;
    public GetQueryParams withPackage(GetPackageEnum package_) {
        this.package_ = package_;
        return this;
    }
}