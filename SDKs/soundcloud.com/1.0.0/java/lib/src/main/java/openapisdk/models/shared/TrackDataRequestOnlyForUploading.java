package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackDataRequestOnlyForUploading {
    @SpeakeasyMetadata("multipartForm:name=Only for uploading")
    public String onlyForUploading;
    public TrackDataRequestOnlyForUploading withOnlyForUploading(String onlyForUploading) {
        this.onlyForUploading = onlyForUploading;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public TrackDataRequestOnlyForUploading withContent(byte[] content) {
        this.content = content;
        return this;
    }
}