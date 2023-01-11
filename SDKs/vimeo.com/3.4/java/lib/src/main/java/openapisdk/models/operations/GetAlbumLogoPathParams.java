package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlbumLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public GetAlbumLogoPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logo_id")
    public Double logoId;
    public GetAlbumLogoPathParams withLogoId(Double logoId) {
        this.logoId = logoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetAlbumLogoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}