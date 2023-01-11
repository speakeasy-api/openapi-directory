package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeleteGpgKeyForAuthenticatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gpg_key_id")
    public Long gpgKeyId;
    public UsersDeleteGpgKeyForAuthenticatedPathParams withGpgKeyId(Long gpgKeyId) {
        this.gpgKeyId = gpgKeyId;
        return this;
    }
}