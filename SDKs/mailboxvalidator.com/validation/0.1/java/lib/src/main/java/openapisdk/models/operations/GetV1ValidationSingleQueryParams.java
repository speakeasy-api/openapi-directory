package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1ValidationSingleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetV1ValidationSingleQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetV1ValidationSingleFormatEnum format;
    public GetV1ValidationSingleQueryParams withFormat(GetV1ValidationSingleFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetV1ValidationSingleQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}