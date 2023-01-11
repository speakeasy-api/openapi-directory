package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackDataRequestOnlyForUploadingForProUsers {
    @SpeakeasyMetadata("multipartForm:name=Only for uploading, for PRO users")
    public String onlyForUploadingForPROUsers;
    public TrackDataRequestOnlyForUploadingForProUsers withOnlyForUploadingForProUsers(String onlyForUploadingForPROUsers) {
        this.onlyForUploadingForPROUsers = onlyForUploadingForPROUsers;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public TrackDataRequestOnlyForUploadingForProUsers withContent(byte[] content) {
        this.content = content;
        return this;
    }
}