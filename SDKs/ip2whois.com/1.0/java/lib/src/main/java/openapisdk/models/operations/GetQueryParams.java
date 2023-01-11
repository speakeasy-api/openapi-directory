package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public GetQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public GetQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}