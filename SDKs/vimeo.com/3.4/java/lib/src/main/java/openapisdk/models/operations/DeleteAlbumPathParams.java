package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlbumPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=album_id")
    public Double albumId;
    public DeleteAlbumPathParams withAlbumId(Double albumId) {
        this.albumId = albumId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public DeleteAlbumPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}