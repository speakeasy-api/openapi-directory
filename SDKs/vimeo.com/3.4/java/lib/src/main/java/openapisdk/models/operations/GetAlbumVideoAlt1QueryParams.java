package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlbumVideoAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=password")
    public String password;
    public GetAlbumVideoAlt1QueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
}