package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlbumVideoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=password")
    public String password;
    public GetAlbumVideoQueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
}