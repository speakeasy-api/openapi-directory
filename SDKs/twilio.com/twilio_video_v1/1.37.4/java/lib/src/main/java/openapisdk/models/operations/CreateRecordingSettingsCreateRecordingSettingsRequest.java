package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRecordingSettingsCreateRecordingSettingsRequest {
    @SpeakeasyMetadata("form:name=AwsCredentialsSid")
    public String awsCredentialsSid;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withAwsCredentialsSid(String awsCredentialsSid) {
        this.awsCredentialsSid = awsCredentialsSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AwsS3Url")
    public String awsS3Url;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withAwsS3Url(String awsS3Url) {
        this.awsS3Url = awsS3Url;
        return this;
    }
    @SpeakeasyMetadata("form:name=AwsStorageEnabled")
    public Boolean awsStorageEnabled;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withAwsStorageEnabled(Boolean awsStorageEnabled) {
        this.awsStorageEnabled = awsStorageEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=EncryptionEnabled")
    public Boolean encryptionEnabled;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withEncryptionEnabled(Boolean encryptionEnabled) {
        this.encryptionEnabled = encryptionEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=EncryptionKeySid")
    public String encryptionKeySid;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withEncryptionKeySid(String encryptionKeySid) {
        this.encryptionKeySid = encryptionKeySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateRecordingSettingsCreateRecordingSettingsRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}