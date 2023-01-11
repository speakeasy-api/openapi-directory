package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1EmailDisposableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetV1EmailDisposableQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetV1EmailDisposableFormatEnum format;
    public GetV1EmailDisposableQueryParams withFormat(GetV1EmailDisposableFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetV1EmailDisposableQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}