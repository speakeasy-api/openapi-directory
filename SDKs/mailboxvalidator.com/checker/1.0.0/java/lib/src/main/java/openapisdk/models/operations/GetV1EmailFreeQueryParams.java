package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1EmailFreeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetV1EmailFreeQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetV1EmailFreeFormatEnum format;
    public GetV1EmailFreeQueryParams withFormat(GetV1EmailFreeFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetV1EmailFreeQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}