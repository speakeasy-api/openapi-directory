package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetGpgKeyForAuthenticatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gpg_key_id")
    public Long gpgKeyId;
    public UsersGetGpgKeyForAuthenticatedPathParams withGpgKeyId(Long gpgKeyId) {
        this.gpgKeyId = gpgKeyId;
        return this;
    }
}